import React, { Component } from 'react'

export class CamPlay extends Component {
  constructor(props) {
    super(props);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePrevClick() {
    this.props.onPrev();
  }

  handleNextClick() {
    this.props.onNext();
  }

  render() {
    const jpg_path = "url('/img/"+ this.props.item_no +".jpg')";

    return (
      <div className="player__top">
        <div className="player-cover">
          <span>
            <div className="player-cover__item" style={{ backgroundImage: jpg_path }}></div>
          </span>
        </div>
        <div className="player-controls">
          <div className="player-controls__item -favorite">
            <img src="/svg/icon-heart-o.svg" className="icon" />
          </div>
          <a href="https://www.youtube.com/watch?v=ICjyAe9S54c" target="_blank" className="player-controls__item">
            <img src="/svg/icon-link.svg" className="icon" />
          </a>
          <div className="player-controls__item" onClick={this.handlePrevClick}>
            <img src="/svg/icon-prev.svg" className="icon" />
          </div>
          <div className="player-controls__item" onClick={this.handleNextClick}>
            <img src="/svg/icon-next.svg" className="icon" />
          </div>
          <div className="player-controls__item -xl js-play">
            <img src="/svg/icon-play.svg" className="icon" />
          </div>
        </div>
      </div>
    )
  }
}
