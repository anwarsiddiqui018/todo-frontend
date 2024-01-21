import axios from "axios";
class TodoDataService {
  async getAll(token) {
    try {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
      console.log("Token " + token);

      const response = await axios.get("http://localhost:8000/api/todos/");
      console.log("Response Headers from todos class:", response.headers);

      return response.data; // Return the response data
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  }
  createTodo(data, token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.post("http://localhost:8000/api/todos/", data);
  }
  updateTodo(id, data, token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.put(`http://localhost:8000/api/todos/${id}`, data);
  }
  deleteTodo(id, token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.delete(`http://localhost:8000/api/todos/${id}`);
  }
  completeTodo(id, token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.put(`http://localhost:8000/api/todos/${id}/complete`);
  }
  login(data) {
    return axios.post("http://localhost:8000/api/login/", data);
  }
  signup(data) {
    return axios.post("http://localhost:8000/api/signup/", data);
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoDataService();
