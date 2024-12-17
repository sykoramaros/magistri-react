import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { GetSubjects } from "../../Services/SubjectService/GetSubjects"
import { UpdateSubject } from "../../Services/SubjectService/UpdateSubject"

const Edit = () => {
  const { id } = useParams()
  const [subject, setSubject] = useState({
    id: "",
    name: "",
  })

  const navigate = useNavigate()

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const subjectData = await GetSubjects(id)
        setSubject(subjectData.data)
      } catch (error) {
        console.error("Error fetching subject:", error)
      }
    }
    fetchSubject()
  }, [id])

  const HandleInputChange = (event) => {
    const { name, value } = event.target
    setSubject((prevSubject) => ({
      ...prevSubject,
      [name]: value,
    }))
  }

  const HandleSubmit = async (event) => {
    event.preventDefault()
    try {
      await UpdateSubject(id, subject)
      navigate("/subjects")
    } catch (error) {
      console.error("Error updating subject:", error)
    }
  }

  return (
    <div className="container">
      <h1>Edit subject</h1>
      <form onSubmit={HandleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={subject.name}
            onChange={HandleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Update
        </button>
      </form>
    </div>
  )
}

export default Edit
