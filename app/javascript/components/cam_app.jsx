import React, {Component} from 'react'
import _ from 'lodash'
import * as faceapi from 'face-api.js'

import { CamPlay } from './cam_play'
import { CamProgress } from './cam_progress'


function getFaceDetectorOptions() {
  // tiny_face_detector options
  const inputSize = 512
  const scoreThreshold = 0.5

  return new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold })
}

let predictedAges = []

function interpolateAgePredictions(age) {
  predictedAges = [age].concat(predictedAges).slice(0, 30)
  const avgPredictedAge = predictedAges.reduce((total, a) => total + a) / predictedAges.length
  return avgPredictedAge
}


export class CamApp extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      item_no: 1,
      modelsLoaded: false,
      webcamAllowed: null,
      face_detector_option: getFaceDetectorOptions(),
      face_age: null,
      face_gender: null,
    };
    this.calculateRecommandItem = this.calculateRecommandItem.bind(this);
    this.handleGoPrev = this.handleGoPrev.bind(this);
    this.handleGoNext = this.handleGoNext.bind(this);
  }

  webcam = React.createRef();

  delay = ms => new Promise(_ => setTimeout(_, ms));

  connectToWebcam = () => {
    if (navigator.mediaDevices.getUserMedia) {
      return navigator.mediaDevices.getUserMedia({video: true})
        .then((stream) => {
          this.webcam.current.srcObject = stream;
          this.setState({ webcamAllowed: true });
        })
        .catch(err => {
          console.log(err);
          this.setState({ webcamAllowed: false })
          throw new Error('webc')
        });
    }
  };

  componentDidMount() {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.ageGenderNet.load('/models'),
    ])
      .then(() => this.setState({ modelsLoaded: true }))
      .then(this.connectToWebcam)
      // wait for it to initialize and start capturing
      .then(() => this.delay(1000))
      // use throttling to reduce the load on the client
      .then(() => {
        _.throttle(this.detectFace, 100)
        this.timer = setInterval(this.detectFace, 200);
      })
      .catch(console.log)
  }

  detectFace = async () => {
    try {
      const videoEl = $('#inputVideo').get(0)
      const result = await faceapi.detectSingleFace(videoEl, this.state.face_detector_option).withAgeAndGender();
      if (result) {
        const canvas = $('#overlay').get(0)
        const dims = faceapi.matchDimensions(canvas, videoEl, true)

        const resizedResult = faceapi.resizeResults(result, dims)
        faceapi.draw.drawDetections(canvas, resizedResult)
        const { age, gender, genderProbability } = resizedResult

        // interpolate gender predictions over last 30 frames
        // to make the displayed age more stable
        const interpolatedAge = interpolateAgePredictions(age)
        new faceapi.draw.DrawTextField(
          [
            `${faceapi.round(interpolatedAge, 0)} years`,
            `${gender} (${faceapi.round(genderProbability)})`
          ],
          result.detection.box.bottomLeft
        ).draw(canvas)

        this.calculateRecommandItem(age, gender);
      }

      return null;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  calculateRecommandItem(age, gender) {
    if(gender == 'female') {
      if (age <= 22) {
        this.setState({ item_no: '22_female' });
      } else if (age <= 26) {
        this.setState({ item_no: '26_female' });
      } else if (age <= 30) {
        this.setState({ item_no: '30_female' });
      } else {
        this.setState({ item_no: 'old_female' });
      }
    } else {
      if (age <= 30) {
        this.setState({ item_no: '22_male' });
      } else if (age <= 24) {
        this.setState({ item_no: '24_male' });
       } else if (age <= 28) {
        this.setState({ item_no: '28_male' });
      } else {
        this.setState({ item_no: 'old_male' });
      }
    }

    this.setState({ face_age: age, face_gender: gender });
  }

  handleGoPrev() {
    this.setState({
      item_no: this.state.item_no - 1
    });
  }

  handleGoNext() {
    this.setState({
      item_no: this.state.item_no + 1
    });
  }

  render() {
    return (
<div className="row">
  <div className="col-md-7">
    <div className="cam_wrapper">
      <div className="player">
        <CamPlay
          item_no={ this.state.item_no }
          onPrev={ this.handleGoPrev }
          onNext={ this.handleGoNext }
        />
        <CamProgress />
      </div>
    </div>
  </div>
  <aside className="col-md-5 p-0">
    {(!this.state.webcamAllowed) ? <div className="p-0"><p>请允许访问摄像头，以便程序可以识别您。</p></div> : null}
    <div className="p-0">
      {(this.state.modelsLoaded) ? <video autoPlay width={500} height={375} ref={this.webcam} id="inputVideo" /> : <p>正在下载模型，请稍后</p>}
      <canvas id="overlay" />
    </div>
    <div className="p-3 mb-3 bg-light rounded">
      <h4 className="font-italic">识别结果</h4>
      <p className="mb-0">年龄：{ faceapi.round(this.state.face_age, 0) }</p>
      <p className="mb-0">性别：{ this.state.face_gender }</p>
    </div>
  </aside>
</div>
    );
  }
}
