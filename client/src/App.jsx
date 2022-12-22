import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Register, { RegisterAction } from "./elements/register";
import Login, { loginAction } from "./elements/login";
import NavBar from "./elements/navBar";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children: [
        { path: "/", element: <Register />, action: RegisterAction },
        { path: "/login", element: <Login />, action: loginAction },
      ],
    },
    {
      path: "/home",
      element: <NavBar />,
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default App;
