import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>Not found :-(</h1>
      <Link to="/">Back to Home</Link>
    </div>
  )
};

export default NotFound