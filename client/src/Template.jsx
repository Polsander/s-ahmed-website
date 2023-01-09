import React from 'react'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import { Outlet } from 'react-router-dom'

const Template = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
    </div>
  )
}

export default Template