import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Privacy from "./Pages/Privacy/Privacy"
import Students from "./Pages/Students/Index"
import StudentCreate from "./Pages/Students/Create"
import StudentEdit from "./Pages/Students/Edit"
import Subjects from "./Pages/Subjects/Subjects"
import Grades from "./Pages/Grades/Grades"
import NotFound from "./Pages/Shared/NotFound"
import Error from "./Pages/Shared/Error"
import Layout from "./Pages/Layout/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/create" element={<StudentCreate />} />
          <Route path="/students/edit/:id" element={<StudentEdit />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/error" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
