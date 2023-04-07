import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  GetProfile,
  GetSongData,
  InboxData,
  SearchSongs,
  SearchUsers,
} from "./api/authorization";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";
import SongPage from "./pages/songPage";
import UploadPage from "./pages/uploadPage";
import InboxPage from "./pages/inboxPage";
import SearchPage from "./pages/searchPage";
import NavBar from "./elements/navBar";
import Player from "./elements/player";
import NotFound from "./pages/notFound";

function App() {
  const AppLayout = () => (
    <>
      <NavBar />
      <Outlet />
    </>
  );

  const Router = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <LandingPage /> },
    {
      element: <AppLayout />,
      children: [
        { path: "/home", element: <HomePage /> },
        { path: "/inbox", element: <InboxPage /> },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
}

export default App;
