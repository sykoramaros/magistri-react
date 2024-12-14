import axios from "axios";

export const DeleteStudent = (id) => {
  return axios.delete(`http://localhost:8080/api/students/${id}`)
}