import axios from "axios"

export const DeleteStudent = (id) => {
  // return axios.delete(`http://localhost:8080/api/students/${id}`)   // lokalni api server (apache tomcat)
  return axios.delete(
    `https://magistri-ms.azurewebsites.net/api/students/${id}`
  ) // azure server
}
