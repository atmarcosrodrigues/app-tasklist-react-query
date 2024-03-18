import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

import "./styles.css";

interface Task {
  id: number;
  completed: boolean;
  todo?: string;
  userId?: number;
}

function TaskList({ queryClient }: { queryClient: QueryClient }) {
  return <div className="app-container"></div>;
}

export default TaskList;
