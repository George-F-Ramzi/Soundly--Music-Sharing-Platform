import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Register, { RegisterAction } from "./elements/register";
import Login, { loginAction } from "./elements/login";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";
import SongPage from "./pages/songPage";
import UploadPage from "./pages/uploadPage";
import InboxPage from "./pages/inboxPage";
import SearchPage from "./pages/searchPage";
import "./css/profile.css";
import "./css/song.css";
import "./css/page.css";

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
      element: <HomePage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/song",
      element: <SongPage />,
    },
    {
      path: "/upload",
      element: <UploadPage />,
    },
    {
      path: "/inbox",
      element: <InboxPage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default App;
