import axios from "axios";

function updateTask(taskId: number, completed: boolean) {
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

  return axios
    .patch(`${apiEndpoint}/${taskId}`, {
      completed,
    })
    .then((response) => response.data);
}
export default updateTask;
