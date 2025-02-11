import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetail from "./Components/CountryDetail.jsx";
import Home from "./Components/Home.jsx";
import ErrorPage from "./Components/Error.jsx"; // Correct import
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root layout with Header and Outlet
    errorElement: <ErrorPage />, // Handles errors for all child routes
    children: [
      {
        index: true, // Default route
        element: <Home />,
      },
      {
        path: ":country", // Nested route for country details
        element: <CountryDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
