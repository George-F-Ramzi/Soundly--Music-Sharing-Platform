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
import Player from "./elements/player";
import { useState, createContext } from "react";
import {
  Artists,
  Discover,
  PlaylistOfWeek,
  GetCurrentSong,
} from "./api/authApi";
import "./css/profile.css";
import "./css/song.css";
import "./css/page.css";
import "./css/player.css";

export const authContext = createContext();

function App() {
  const [currentSong, setCurrentSong] = useState();
  const [show, setShow] = useState(false);
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
      loader: async () => {
        const data = {};
        const songs = await Discover();
        const users = await Artists();
        const playlist = await PlaylistOfWeek();
        data.Discover = songs;
        data.Artists = users;
        data.Week = playlist;
        return data;
      },
    },
    {
      path: "/profile/:userId",
      element: <ProfilePage />,
    },
    {
      path: "/song/:songId",
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
      path: "/search/:value",
      element: <SearchPage />,
    },
  ]);

  const Song = async (songId, userId) => {
    const data = await GetCurrentSong(songId, userId);
    setCurrentSong(data);
    setShow(true);
  };

  return (
    <>
      <authContext.Provider value={{ Song, currentSong }}>
        {show ? <Player /> : ""}
        <RouterProvider router={Router} />
      </authContext.Provider>
    </>
  );
}

export default App;
