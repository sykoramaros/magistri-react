import React from "react"
import { Link } from "react-router-dom"
import SubjectCard from "../../components/SubjectCard/SubjectCard"
import { useEffect, useState } from "react"
import { GetSubjects } from "../../Services/SubjectService/GetSubjects"

const Index = () => {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    GetSubjects()
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error("Error listing subjects", error))
  }, [])

  return (
    <div className="container">
      <h1>List of all subjects</h1>

      <hr className="hr-dotted" />

      <div>
        <Link className="btn btn-success" to="/subjects/create">
          Create
        </Link>
      </div>
      <hr />

      <div className="row">
        {subjects.map((subject) => (
          <div
            className="col-md-6 mb-4 d-flex align-items-stretch"
            key={subject.id}
          >
            <SubjectCard
              item={subject}
              id={subject.id}
              name={subject.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
