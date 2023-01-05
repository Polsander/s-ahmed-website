import { react } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

import Container from 'react-bootstrap/Container'

import Navigation from './components/Navigation.jsx'
import Intro from './components/Intro'
import ProjectRedirect from './components/ProjectRedirect'

function App() {

  return (
    <div>
      <Navigation/>
      <Intro/>
      <Container>
        <ProjectRedirect/>
      </Container>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
