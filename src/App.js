import React, { useEffect, useState } from "react"
import axios from "axios"
import { getStudents } from "./services/studentServices/getStudents"
import { addStudent } from "./services/studentServices/addStudent"
import { updateStudent } from "./services/studentServices/updateStudent"
import { deleteStudent } from "./services/studentServices/deleteStudent"

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    getStudents()
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error listing students", error))
  }, [])

  const handleDeleteStudent = (id) => {
    deleteStudent(id)
      .then((response) =>
        setStudents(students.filter((student) => student.id !== id))
      )
      .catch((error) => console.error("Error deleting student", error))
  }

  return (
    <div>
      <h1>Students list</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <p>
              {student.firstName} {student.lastName}
            </p>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteStudent(student.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
