import React from 'react'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Books from './pages/Books'
import Papershelf from './pages/Papershelf'
import Home from './pages/Home'

function App() {
let component
console.log(window.location.pathname)
switch (window.location.pathname) {
  case "/":
    component = <Home />
    break
  case "/home":
    component = <Home />
    break
  case "/resume":
    component = <Resume />
    break
  case "/blog":
    component = <Blog />
    break
  case "/projects":
    component = <Projects />
    break
  case "/books":
    component = <Books />
    break
  case "/papershelf":
    component = <Papershelf />
    break
}

  return (
    <div className='lg:max-w-[750px] lg:m-auto mx-2'>
    <Title />
    <Navbar />
    {component}
    </div>
    
  )
}

export default App