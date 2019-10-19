// Run this example by adding <%= javascript_pack_tag 'cam_item' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { CamApp } from '../components/cam_app'

const render_cam_item = () => {
  return (
   ReactDOM.render(
     <CamApp />,
     document.getElementById('cam_item')
   )
  )
}

document.addEventListener('DOMContentLoaded', render_cam_item)
