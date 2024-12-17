import axios from "axios"
export const GetStudents = () => {
  // return axios.get("http://localhost:8080/api/students")    // lokalni api server (apache tomcat)
  return axios.get("https://magistri-ms.azurewebsites.net/api/students") // azure server
}
