import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { CamApp } from '../components/cam_app'

function render_cam_item() {
  return (
   ReactDOM.render(
     <CamApp />,
     document.getElementById('cam_app')
   )
  )
}

document.addEventListener('DOMContentLoaded', render_cam_item)
