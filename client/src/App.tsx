import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/not_found";
import ErrorPage from "./pages/error_page";
import LandingPage from "./pages/landing_page";

function App() {
  const Router = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    { path: "/", errorElement: <ErrorPage />, element: <LandingPage /> },
  ]);

  return <RouterProvider router={Router} />;
}

export default App;
