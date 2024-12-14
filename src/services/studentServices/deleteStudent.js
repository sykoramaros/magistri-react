import axios from "axios";

export const deleteStudent = (id) => {
  return axios.delete(`http://localhost:8080/api/students/${id}`)
}