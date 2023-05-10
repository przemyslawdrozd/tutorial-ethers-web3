import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TransProvider } from './context/TransContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <TransProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </TransProvider>

)
