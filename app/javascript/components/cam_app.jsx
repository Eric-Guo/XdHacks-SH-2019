import React from 'react'

import { CamPlay } from './cam_play'
import { CamProgress } from './cam_progress'

export const CamApp = (props) => {
  return (
  <div className="player">
    <CamPlay />
    <CamProgress />
  </div>
  )
}
