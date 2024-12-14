import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Privacy from "./pages/privacy/Privacy"
import Students from "./pages/students/Students"
import Subjects from "./pages/subjects/Subjects"
import Grades from "./pages/grades/Grades"  

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/students" element={<Students />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/grades" element={<Grades />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App