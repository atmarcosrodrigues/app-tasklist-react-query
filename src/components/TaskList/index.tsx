import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import getTasks from "../../services/getTasks";
import updateTask from "../../services/updateTask";
import "./styles.css";

interface Task {
  id: number;
  completed: boolean;
  todo?: string;
  userId?: number;
}

function TaskList({ queryClient }: { queryClient: QueryClient }) {
  const { isPending, error, data } = useQuery({
    queryKey: ["taskList"],
    queryFn: () => getTasks(),
  });

  const mutation = useMutation({
    mutationFn: (task: Task) => {
      return updateTask(task.id, task.completed);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["taskList"], (currentData: Task[]) =>
        currentData.map((task: Task) => (task.id === data.id ? data : task))
      );
    },
    onError: (error) => {
      console.error(error);
    },
  });

  if (isPending) return <div className="message"> Loading....</div>;

  if (error)
    return (
      <div className="message">"An error has occurred: " + error.message;</div>
    );

  return (
    <div className="app-container">
      <div className="todos">
        {data.map((task: Task) => (
          <div
            onClick={() =>
              mutation.mutate({ id: task.id, completed: !task.completed })
            }
            className={`todo ${task.completed && "todo-completed"}`}
            key={task.id}
          >
            {task.todo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
