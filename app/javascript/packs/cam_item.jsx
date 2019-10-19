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
