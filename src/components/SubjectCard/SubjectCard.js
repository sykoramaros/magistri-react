import { Link } from "react-router-dom"
import { DeleteSubject } from "../../Services/SubjectService/DeleteSubject"

const SubjectCard = ({ subject, id, name }) => {
  const HandleDeleteSubject = async (id) => {
    try {
      await DeleteSubject(id)
      window.location.reload()
      console.log("Subject deleted successfully")
    } catch (error) {
      console.error("Error deleting subject", error)
    }
  }

  return (
    <div className="card border-primary mb-3 shadow-sm w-100">
      <h5 className="card-header bg-transparent border-primary">
        {name}
      </h5>
      <div className="card-body">
        <h4 className="card-title text-success">ID: {id}</h4>
        <p className="card-text fst-italic">
          <span></span>
        </p>
      </div>
      <div className="card-footer bg-transparent border-primary">
        <div className="row">
          <div className="col">
            <Link
              to={`/subjects/edit/${subject}`}
              className="btn btn-warning w-100 rounded-1"
              type="button"
            >
              Edit
            </Link>
          </div>
          <div className="col">
            <button
              className="btn btn-danger w-100 rounded-1"
              type="button"
              onClick={() => HandleDeleteSubject(subject.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectCard
