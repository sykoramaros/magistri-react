import axios from "axios"

export const UpdateSubject = async (id, subject) => {
  try {
    // const response = await axios.put(`http://localhost:8080/api/subjects/${id}`, subject); // lokalni api server (apache tomcat)
    const response = await axios.put(
      `https://magistri-ms.azurewebsites.net/api/subjects/${id}`,
      subject
    ) // azure server
    return response.data
  } catch (error) {
    throw error
  }
}
