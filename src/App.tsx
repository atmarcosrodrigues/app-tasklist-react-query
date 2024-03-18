import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Hearder from "./components/Hearder";
import TaskList from "./components/TaskList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Hearder />
      <TaskList queryClient={queryClient} />
    </QueryClientProvider>
  );
}

export default App;
