import axios from "axios"

export const UpdateSubject = async (id, subject) => {
  try {
    const response = await axios.put(
      `https://magistri-ms.azurewebsites.net/api/subjects/${id}`,
      subject
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server odpověděl s chybou (např. 400 nebo 500)
      console.error("Error response from server:", error.response.data);
      throw new Error(`Server Error: ${error.response.status} - ${error.response.data}`);
    } else if (error.request) {
      // Požadavek byl odeslán, ale nebyla obdržena odpověď
      console.error("No response received:", error.request);
      throw new Error("No response from server");
    } else {
      // Něco jiného způsobilo chybu
      console.error("Error setting up request:", error.message);
      throw new Error(`Request Error: ${error.message}`);
    }
  }
};