import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import { HomePageData, InboxData, UploadedSongs } from "./api/authorization";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import NavBar from "./Components/navBar";
import NotFound from "./pages/notFound";
import Player from "./Components/player";
import ErrorPage from "./pages/errorPage";
import Inbox from "./pages/inbox";
import UploadPage from "./pages/uploadPage";
import ProfilePage from "./pages/profilePage";
// import SongPage from "./pages/songPage";

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
        // {
        //   path: "/song/:id",
        //   element: <SongPage />,
        //   loader: async ({ params }) => {
        //     return defer({ data: GetProfileData(params.id!) });
        //   },
        // },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
}

export default App;
