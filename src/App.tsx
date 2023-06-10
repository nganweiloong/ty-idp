import Display from "./component/Display";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Display />
    </QueryClientProvider>
  );
}

export default App;
