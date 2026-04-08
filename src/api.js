import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "pro_8e9a61f9f6dadf64f9f26b46acca8f6ce7ab3c98c701c3a10482f59ded5f7450",
  },
});

export const postProject = (projectData) =>
  apiClient.post("/workintech", projectData);