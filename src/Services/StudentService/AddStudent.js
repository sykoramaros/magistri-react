import axios from "axios"
const API_URL = "http://localhost:8080/api/students"

export const AddStudent = (student) => {
  return axios.post(API_URL, student)
}
