import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.module.scss'
import NotesPage from './pages/Notes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <NotesPage />
  </React.StrictMode>,
)
