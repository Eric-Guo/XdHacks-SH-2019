import React, {Component} from 'react';

import { CamPlay } from './cam_play'
import { CamProgress } from './cam_progress'

export class CamApp extends Component {
  render() {
    return (
      <div className="player">
        <CamPlay />
        <CamProgress />
      </div>
    );
  }
}
