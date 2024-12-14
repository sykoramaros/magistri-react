import axios from "axios";

export const UpdateStudent = (id, student) => {
  return axios.put(`http://localhost:8080/api/students/${id}`, student)
}