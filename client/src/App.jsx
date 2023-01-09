import { react } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

import Container from 'react-bootstrap/Container'

import Navigation from './components/Navigation.jsx'
import Intro from './components/Intro'
import ProjectRedirect from './components/ProjectRedirect'
import ListProjects from './components/ListProjects'
import Footer from './components/Footer'

function App() {

  return (
    <div className='page-container'>
      <Navigation/>
      <Intro/>
      <Container>
        <ProjectRedirect/>
        <ListProjects/>
      </Container>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
