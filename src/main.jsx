import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './views/Login.jsx'

const session = JSON.parse(localStorage?.getItem('session'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {session ? <App session={session}/> : <Login/>}
  </React.StrictMode>,
)
