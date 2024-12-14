import axios from "axios";
export const GetStudents = () => {
  return axios.get("http://localhost:8080/api/students")
}