import React, {Component} from 'react';

import { CamPlay } from './cam_play'
import { CamProgress } from './cam_progress'

export class CamApp extends Component {
  render() {
    return (
<div class="row">
  <div class="col-md-7">
    <div class="cam_wrapper">
      <div className="player">
        <CamPlay />
        <CamProgress />
      </div>
    </div>
  </div>
  <aside class="col-md-5">
    <div class="p-4 mb-3 bg-light rounded">
      <h4 class="font-italic">识别结果</h4>
      <p class="mb-0">会自动依据fact-api的识别结果推荐相应产品。</p>
    </div>
  </aside>
</div>
    );
  }
}
