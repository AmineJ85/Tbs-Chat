import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <App />
  </React.StrictMode>,
)
