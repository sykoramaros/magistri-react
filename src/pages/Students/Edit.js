import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { GetStudents } from "../../Services/StudentService/GetStudents"
import { UpdateStudent } from "../../Services/StudentService/UpdateStudent"

const Edit = () => {
  const { id } = useParams()
  const [student, setStudent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  })

  const navigate = useNavigate()

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentData = await GetStudents(id)
        setStudent(studentData.data)
      } catch (error) {
        console.error("Error fetching student:", error)
      }
    }
    fetchStudent()
  }, [id])

  const HandleInputChange = (event) => {
    const { name, value } = event.target
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }))
  }

  // Ulozeni do databaze
  const HandleSubmit = async (event) => {
    event.preventDefault() // Zamezi reloadu stranky
    try {
      await UpdateStudent(id, student) // Aktualizuje studenta v databazi
      navigate("/students") // Presmeruje na Index stranku s seznamem studentu
    } catch (error) {
      console.error("Error updating student:", error)
    }
  }

  return (
    <div className="container">
      <h1>Edit a student</h1>
      <form onSubmit={HandleSubmit}>
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            value={student.firstName}
            onChange={HandleInputChange}
          />
          <p className="text-dark">{student.firstName}</p>
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            value={student.lastName}
            onChange={HandleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Date of Birth</label>
          <input
            name="dateOfBirth"
            type="date"
            className="form-control"
            value={student.dateOfBirth}
            onChange={HandleInputChange}
          />
        </div>
        <div className="mt-4">
          <input className="btn btn-success" type="submit" value="Update" />
        </div>
      </form>
    </div>
  )
}

export default Edit
