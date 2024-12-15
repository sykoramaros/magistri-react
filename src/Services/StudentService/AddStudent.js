import axios from "axios"

export const AddStudent = (student) => {
  return axios.post("http://localhost:8080/api/students", student)
}
