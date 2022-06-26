import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DetailRepositoryProvider } from './hooks/DetailRepositoryModalContext'
import './styles/reset.css'
import './styles/root.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <DetailRepositoryProvider>

      <App />

    </DetailRepositoryProvider>
  </React.StrictMode>
)
