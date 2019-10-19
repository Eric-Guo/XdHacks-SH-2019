import React, {Component} from 'react';

import { CamPlay } from './cam_play'
import { CamProgress } from './cam_progress'

export class CamApp extends Component {
  state = {
    item_no: 1
  };

  render() {
    return (
<div className="row">
  <div className="col-md-7">
    <div className="cam_wrapper">
      <div className="player">
        <CamPlay item_no={ this.state.item_no } />
        <CamProgress />
      </div>
    </div>
  </div>
  <aside className="col-md-5">
    <div className="p-4 mb-3 bg-light rounded">
      <h4 className="font-italic">识别结果</h4>
      <p className="mb-0">会自动依据fact-api的识别结果推荐相应产品。</p>
    </div>
  </aside>
</div>
    );
  }
}
