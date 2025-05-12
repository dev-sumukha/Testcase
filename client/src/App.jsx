import React from 'react'
import { Routes, Route } from "react-router"
import Home from './pages/Home'
import BlogHome from "./pages/BlogHome"
import Navbar from './components/Navbar/Navbar'
import NotFoundPage from './pages/NotFoundPage'
import CodingPlatformHome from './pages/CodingPlatformHome'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogHome" element={<BlogHome />} />
        <Route path="/codeHome" element={<CodingPlatformHome />} />

        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App