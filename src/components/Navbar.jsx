import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="px-6 py-4 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-purple-400">UISEN</Link>
        <Link to="/elements" className="text-sm text-gray-300">Elements</Link>
        <Link to="/upload" className="text-sm text-gray-300">Upload</Link>
      </div>

      <div className="flex items-center gap-3">
        <input
          placeholder="Search tags, users..."
          className="px-3 py-2 rounded bg-gray-800 text-sm w-64 focus:outline-none"
        />
        <button className="px-3 py-2 rounded bg-purple-500 text-white">Sign in</button>
      </div>
    </header>
  )
}
