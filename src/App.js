import React from "react"
import "./App.css"

function App() {
  const student = {
    name: "Petr",
    lastname: "Novak",
  }

  const showAlert = () => {
    alert("Hello " + student.name + " " + student.lastname)
  }

  return (
    <div>
      <h1 class="display-1">
        {student.name + " " + student.lastname}
      </h1>
      <h2>Hello</h2>
      <button class="btn btn-primary" onClick={showAlert}>Click</button>
    </div>
  )
}
export default App
