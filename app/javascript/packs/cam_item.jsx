// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const CamItem = (props) => {
  return (
  <div className="player">
    <div className="player__top">
      <div className="player-cover">
        <span>
          <div className="player-cover__item" style="background-image: url(&quot;https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg&quot;);"></div>
        </span>
      </div>
    </div>
  </div>
  )
}

const render_cam_item = () => {
  return (
   ReactDOM.render(
     <CamItem name="React" />,
     document.getElementById('cam_item')
   )
  )
}

document.addEventListener('DOMContentLoaded', render_cam_item)

