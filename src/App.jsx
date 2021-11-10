
// components
import Header from "./components/Header"
import Footer from "./components/Footer"

import { Route, Routes } from "react-router-dom"

// pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {

  // backend URL
  const URL = "https://mfb-react-express-portfolio.herokuapp.com/"


  return (
    <div className="App">
      <Header/>
      <div className="main">
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects URL={URL}/>}/>
          <Route exact path="/about" element={<About URL={URL}/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
