import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import {
  GetComments,
  GetLikedSongs,
  HomePageData,
  InboxData,
  SearchPoint,
  UploadedSongs,
} from "./api/authorization";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import NavBar from "./Components/navBar";
import NotFound from "./pages/notFound";
import Player from "./Components/player";
import ErrorPage from "./pages/errorPage";
import Inbox from "./pages/inbox";
import UploadPage from "./pages/uploadPage";
import ProfilePage from "./pages/profilePage";
import SongPage from "./pages/songPage";
import LikedPage from "./pages/liked_page";
import SearchPage from "./pages/search_page";

function App() {
  const AppLayout = () => (
    <>
      <NavBar />
      <Player />
    </>
  );

  const Router = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    { path: "/", errorElement: <ErrorPage />, element: <LandingPage /> },
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
          loader: async () => {
            return defer({ data: HomePageData() });
          },
        },
        {
          path: "/inbox",
          element: <Inbox />,
          loader: async () => {
            return defer({ data: InboxData() });
          },
        },
        {
          path: "/upload",
          element: <UploadPage />,
        },
        {
          path: "/profile/:id",
          element: <ProfilePage />,
          loader: async ({ params }) => {
            return defer({ data: UploadedSongs(params.id!) });
          },
        },
        {
          path: "/song/:id",
          element: <SongPage />,
          loader: async ({ params }) => {
            return defer({ data: GetComments(params.id!) });
          },
        },
        {
          path: "/liked",
          element: <LikedPage />,
          loader: async () => {
            return defer({ data: GetLikedSongs() });
          },
        },
        {
          path: "/search/:value",
          element: <SearchPage />,
          loader: async ({ params }) => {
            return defer({ data: SearchPoint(params.value!) });
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
}

export default App;
