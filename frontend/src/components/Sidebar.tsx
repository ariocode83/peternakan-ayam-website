import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-blue-900 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">🐔 Peternakan</h1>
      </div>
      <nav className="mt-8">
        <Link to="/" className="block px-6 py-3 hover:bg-blue-800">Dashboard</Link>
        <Link to="/production" className="block px-6 py-3 hover:bg-blue-800">Produksi</Link>
        <Link to="/health" className="block px-6 py-3 hover:bg-blue-800">Kesehatan</Link>
        <Link to="/inventory" className="block px-6 py-3 hover:bg-blue-800">Inventory</Link>
        <Link to="/sales" className="block px-6 py-3 hover:bg-blue-800">Penjualan</Link>
        <Link to="/finance" className="block px-6 py-3 hover:bg-blue-800">Keuangan</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
