import { react } from 'react'
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
    </div>
  )
}

export default App
