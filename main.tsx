import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home.js'

let Render = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
Render.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
