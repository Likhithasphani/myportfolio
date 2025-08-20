// client/src/api.js
import axios from "axios";

// Base URL for portfolio APIs
const BASE_URL = "http://localhost:5000/api/portfolio";

/**

 * @returns {Promise} - Axios response containing an array of projects
 */
export const getProjects = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/projects`);
    return response.data; // JSON array of projects
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

/**
 * Send a contact form message to the backend
 * @param {Object} formData - { name, email, message }
 * @returns {Promise} - Axios response from the server
 */
export const sendMessage = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/contact`, formData);
    return response.data; // Response from backend (e.g., success message)
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
