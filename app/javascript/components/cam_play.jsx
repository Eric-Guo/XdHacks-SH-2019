import React from 'react'

export const CamPlay = (props) => {
  return (
    <div className="player__top">
      <div className="player-cover">
        <span>
          <div className="player-cover__item" style={{ backgroundImage: "url('https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg')"}}></div>
        </span>
      </div>
      <div className="player-controls">
        <div className="player-controls__item -favorite">
          <img src="/svg/icon-heart-o.svg" className="icon" />
        </div>
        <a href="https://www.youtube.com/watch?v=ICjyAe9S54c" target="_blank" className="player-controls__item">
          <img src="/svg/icon-link.svg" className="icon" />
        </a>
        <div className="player-controls__item">
          <img src="/svg/icon-prev.svg" className="icon" />
        </div>
        <div className="player-controls__item">
          <img src="/svg/icon-next.svg" className="icon" />
        </div>
        <div className="player-controls__item -xl js-play">
          <img src="/svg/icon-play.svg" className="icon" />
        </div>
      </div>
    </div>
  )
}
