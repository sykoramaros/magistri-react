import axios from "axios"

export const UpdateStudent = async (id, student) => {
  try {
    // const response = await axios.put(`http://localhost:8080/api/students/${id}`, student); // lokalni api server (apache tomcat)
    const response = await axios.put(
      `https://magistri-ms.azurewebsites.net/api/students/${id}`,
      student
    ) // azure server
    return response.data
  } catch (error) {
    throw error
  }
}
