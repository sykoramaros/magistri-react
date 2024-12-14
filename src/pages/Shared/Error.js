import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h1 class="text-danger">Error.</h1>
      <h2 class="text-danger">
        An error occurred while processing your request.
      </h2>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}
export default Error
