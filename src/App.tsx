//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import appCss from './css/App.module.css'
import Home from './router/home'
import About from './router/about'
import NavRight from './components/nav'

const App: React.FC = () => {

  return (
    <Router>
      <h1 >
        Profile
      </h1>

      <NavRight />

      <div >
        <div className={appCss.mainContent} >
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </div>
      </div >
      

    </Router >
  )
}

export default App
