import axios from "axios";
export const DeleteSubject  = (id) => {
  // return axios.delete(`http://localhost:8080/api/subjects/${id}`)   // lokalni api server (apache tomcat)
  return axios.delete(
    `https://magistri-ms.azurewebsites.net/api/subjects/${id}`
  ) // azure server
}