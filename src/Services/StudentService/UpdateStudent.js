import axios from "axios"

export const UpdateStudent = async (id, student) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/students/${id}`,
      student
    );
    return response.data
  } catch (error) {
    throw error
  }
}
