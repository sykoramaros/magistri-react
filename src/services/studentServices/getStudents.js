import axios from "axios";
export const getStudents = () => {
  return axios.get("http://localhost:8080/api/students")
}