import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense
     fallback={<span className="text-2xl font-semibold">Loading...</span>}>
      <App />
    </Suspense>
    
    <ToastContainer />
  </StrictMode>,
)
