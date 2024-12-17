import axios from "axios"

export const AddStudent = (student) => {
  // return axios.post("http://localhost:8080/api/students", student)  // lokalni api server (apache tomcat)
  return axios.post("https://magistri-ms.azurewebsites.net/api/students", student) // azure server
}
