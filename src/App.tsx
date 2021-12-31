import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from '~/components/Navbar/Navbar'
import AboutMe from '~/screens/AboutMe'
import Projects from '~/screens/Projects'

const App: React.FC = () => (
  <div className="flex flex-col neutral-200 h-screen w-screen bg-[url('/src/assets/background.svg')]">
    <Navbar />
    <Routes>
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/about" />} />
    </Routes>
  </div>
)

export default App
