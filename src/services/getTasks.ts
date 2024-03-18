import axios from "axios";

function getTasks() {
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

  return axios.get(`${apiEndpoint}`).then((res) => res.data.todos);
}
export default getTasks;
