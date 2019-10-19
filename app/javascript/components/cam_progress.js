import React from 'react'

export const CamProgress = (props) => {
  return (
  <div className="cam_progress">
    <div className="cam_progress__top">
      <div className="album-info">
        <div className="album-info__name">Moby</div>
        <div className="album-info__track">Extreme Ways</div>
      </div>
      <div className="cam_progress__duration">03:36</div>
    </div>
    <div className="cam_progress__bar">
      <div className="cam_progress__current" style={{ width: "0%" }}></div>
    </div>
    <div className="cam_progress__time">00:00</div>
  </div>
  )
}
