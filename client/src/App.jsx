import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import {
  GetProfile,
  GetSongData,
  InboxData,
  SearchSongs,
  SearchUsers,
} from "./api/authApi";
import LandingPage from "./pages/landingPage";
import Register, { RegisterAction } from "./elements/register";
import Login, { loginAction } from "./elements/login";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";
import SongPage from "./pages/songPage";
import UploadPage from "./pages/uploadPage";
import InboxPage from "./pages/inboxPage";
import SearchPage from "./pages/searchPage";
import NavBar from "./elements/navBar";
import Player from "./elements/player";
import NotFound from "./pages/notFound";
import "./css/profile.css";
import "./css/song.css";
import "./css/page.css";
import "./css/player.css";

function App() {
  const AppLayout = () => (
    <>
      <NavBar />
      <Player />
      <Outlet />
    </>
  );

  const Router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="*" element={<NotFound />} />,
      <Route path="/" element={<LandingPage />}>
        <Route path="/" element={<Register />} action={RegisterAction} />
        <Route path="/login" element={<Login />} action={loginAction} />
      </Route>,
      <Route element={<AppLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/profile/:userId"
          element={<ProfilePage />}
          loader={async ({ params: { userId } }) => {
            return await GetProfile(userId);
          }}
        />
        <Route
          path="/song/:songId"
          element={<SongPage />}
          loader={async ({ params: { songId } }) => {
            return await GetSongData(songId);
          }}
        />
        <Route path="/upload" element={<UploadPage />} />
        <Route
          path="/inbox"
          element={<InboxPage />}
          loader={async () => {
            return await InboxData();
          }}
        />
        <Route
          path="/search/users/:value"
          element={<SearchPage />}
          loader={async ({ params: { value } }) => {
            return await SearchUsers(value);
          }}
        />
        <Route
          path="/search/songs/:value"
          element={<SearchPage />}
          loader={async ({ params: { value } }) => {
            return await SearchSongs(value);
          }}
        />
      </Route>,
    ])
  );

  return <RouterProvider router={Router} />;
}

export default App;
