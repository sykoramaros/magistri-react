import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <footer class="border-top footer text-muted shadow-sm mt-4">
        <div class="container mt-3">
          <div class="row">
            <div class="col">
              <p class="text-white">
                &copy; 2024 - sCool - <Link to="/privacy">Privacy</Link>
              </p>
            </div>
            <div class="col">
              <p class="text-white fs-5">
                Built with <strong>enthusiasm</strong> and powered by{" "}
                <strong>Java Spring and React</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
