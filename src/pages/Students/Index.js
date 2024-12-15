import React from "react"
import { Link } from "react-router-dom"
import StudentCard from "../../components/StudentCard/StudentCard"
import { useEffect, useState } from "react"
import { GetStudents } from "../../Services/StudentService/GetStudents"
import { UpdateStudent } from "../../Services/StudentService/UpdateStudent"
import { DeleteStudent } from "../../Services/StudentService/DeleteStudent"

const Index = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    GetStudents()
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error listing students", error))
  }, [])

  const HandleUpdateStudent = (id, updatedStudent) => {
    UpdateStudent(id, updatedStudent)
      .then((response) =>
        setStudents(
          students.map((student) =>
            student.id === id ? response.data : student
          )
        )
      )
      .catch((error) => console.error("Error updating student", error))
  }

  const HandleDeleteStudent = (id) => {
    DeleteStudent(id)
      .then((response) =>
        setStudents(students.filter((student) => student.id !== id))
      )
      .catch((error) => console.error("Error deleting student", error))
  }

  return (
    <div className="container">
      <h1>List of all students</h1>

      <hr className="hr-dotted" />

      <div>
        <Link className="btn btn-success" to="/Students/Create">Create</Link>
      </div>
      <hr />

      <div className="row">
        {students.map((student) => (
          <div
            className="col-md-6 mb-4 d-flex align-items-stretch"
            key={student.id}
          >
            <StudentCard
              item={student}
              id={student.id}
              name={student.firstName + " " + student.lastName}
              dateOfBirth={new Date(student.dateOfBirth).toLocaleDateString(
                "cs-CZ"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
           