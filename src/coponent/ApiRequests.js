// ApiRequests.js

import axios from "axios";

const BASE_URL = "http://localhost:8081"; // Replace with your Spring Boot API URL

export const fetchIncidents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/incidents`);
    return response.data;
  } catch (error) {
    console.error("Error fetching incidents:", error);
    throw error;
  }
};

// You can define more functions for other API endpoints here
