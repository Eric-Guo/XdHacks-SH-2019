import React, {Component} from 'react';
import _ from 'lodash';

import { CamPlay } from './cam_play'
import { CamProgress } from './cam_progress'

export class CamApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_no: 1,
      webcamAllowed: null
    };
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
    this.connectToWebcam()
      // wait for it to initialize and start capturing
      .then(() => this.delay(1000))
      .catch(console.log)
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
          onPrev={this.handleGoPrev}
          onNext={this.handleGoNext}
        />
        <CamProgress />
      </div>
    </div>
  </div>
  <aside className="col-md-5">
    <div className="p-4 mb-3 bg-light rounded">
      <h4 className="font-italic">识别结果</h4>
      <p className="mb-0">会自动依据fact-api的识别结果推荐相应产品。</p>
    </div>
    <div className="p-1">
      <video autoPlay width={640} height={480} ref={this.webcam} id="videoElement" />
    </div>
  </aside>
</div>
    );
  }
}
