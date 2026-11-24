import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './vars.css'
import './index.css'
import App from './App.jsx'
import LanguageProvider from './context/LanguageContext.jsx'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
    <Analytics />
  </StrictMode>,
)
