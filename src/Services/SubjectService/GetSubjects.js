import axios from "axios"

export const GetSubjects = () => {
  // return axios.get("http://localhost:8080/api/subjects")    // lokalni api server (apache tomcat)
  return axios.get("https://magistri-ms.azurewebsites.net/api/subjects") // azure server
}
