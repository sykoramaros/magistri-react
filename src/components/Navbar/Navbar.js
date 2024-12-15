import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand text-white weight-bolder" href="/">
          School
        </a>
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/privacy">
                Privacy{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/students">
                Students{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/subjects">
                Subjects{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/grades">
                Grades{" "}
              </Link>
            </li>
          </ul>
          <a className="btn btn-danger" type="button">
            Log Out
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
