import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProviderContext } from './context/Contextitem.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderContext><App/></ProviderContext>
  </StrictMode>,
)
