import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import ElementDetail from './pages/ElementDetail'
import Upload from './pages/Upload'
import Shell from './components/Shell'

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elements" element={<Browse />} />
        <Route path="/elements/:slug" element={<ElementDetail />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Shell>
  )
}
