import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// import router
import { BrowserRouter as Router} from "react-router-dom"



// wrap application inside of router to enable router
ReactDOM.render(
  <Router>  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
