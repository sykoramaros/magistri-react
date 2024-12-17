import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AddStudent } from "../../Services/StudentService/AddStudent"

const Create = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  })

  const navigate = useNavigate()

  const HandleInputChange = (event) => {
    const { name, value } = event.target
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }))
  }

  const HandleSubmit = (event) => {
    event.preventDefault()
    AddStudent(student)
      .then((response) => navigate("/students"))
      .catch((error) => console.error("Error creating student", error))
  }

  return (
    <div className="container">
      <h1>Create a new student</h1>
      <form className="mt-4" onSubmit={HandleSubmit}>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={student.firstName}
            onChange={HandleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={student.lastName}
            onChange={HandleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of birth</label>
          <input
            type="date"
            name="dateOfBirth"
            className="form-control"
            value={student.dateOfBirth}
            onChange={HandleInputChange}
            required
          />
        </div>
        <div>
          <input
            className="btn btn-success mt-4"
            type="submit"
            value="Create"
          />
        </div>
      </form>
    </div>
  )
}

export default Create
