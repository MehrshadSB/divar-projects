import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import defaultOptions from "./constants/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClinet = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={queryClinet}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
