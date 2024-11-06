import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WeatherProvider } from "./context/weatherContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <RouterProvider router={router} />
      </WeatherProvider>
    </QueryClientProvider>
  </StrictMode>
);
