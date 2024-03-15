import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <App />
    <Routes>
      <Route exact path='/'/>
      <Route exact path='/bussiness'/>
      <Route exact path='/politics'/>
      <Route exact path='/sports'/>
      <Route exact path='/health'/>
      <Route exact path='/entertainment'/>
      <Route exact path='/science'/>
    </Routes>
  </Router>
  </React.StrictMode>,
)
