import { Link, useNavigate } from "react-router-dom"
import { DeleteStudent } from "../../Services/StudentService/DeleteStudent"
const StudentCard = ({item}) => {

  const navigate = useNavigate()

  const HandleDeleteStudent = async (id) => {
    try {
      await DeleteStudent(id)
      navigate("/students")
      console.log("Student deleted successfully")
    } catch (error) {
      console.error("Error deleting student", error)    
    }
  }

  return (
    <div className="card border-primary mb-3 shadow-sm w-100">
      <h5>{item.firstName} {item.lastName}</h5>
      <div className="card-body">
        <h5 className="card-title text-success">Info</h5>
        <p className="card-text fst-italic">
          <span>ID: {item.id}</span>
          <br />
          Date of Birth: {item.dateOfBirth}
          <br />
        </p>
      </div>
      <div className="card-footer bg-transparent border-primary">
        <div className="row">
          <div className="col">
            <Link to={`/students/edit/${item.id}`} className="btn btn-warning w-100 rounded-1" type="button">
              Edit
            </Link>
          </div>
          <div className="col">
              <form method="post">
                <input class="btn btn-danger w-100 rounded-1" type="button" value="Delete" onClick={() => HandleDeleteStudent(item.id)} />
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
