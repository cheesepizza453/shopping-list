import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("http://localhost:3001/todos");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`http://localhost:3001/todos/${id}`);
  return response.data;
};
