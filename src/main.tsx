import React from 'react'
import { Router } from 'react-chrome-extension-router'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Homepage />
    </Router>
  </React.StrictMode>
)
