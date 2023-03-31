import React from 'react'
import { goBack, goTo, Link, popToTop, Router } from 'react-chrome-extension-router'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
