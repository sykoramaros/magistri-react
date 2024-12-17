import axios from "axios"

export const AddSubject = (subject) => {
  // return axios.post("http://localhost:8080/api/subjects", subject)  // lokalni api server (apache tomcat)
  return axios.post(
    "https://magistri-ms.azurewebsites.net/api/subjects",
    subject
  ) // azure server
}
