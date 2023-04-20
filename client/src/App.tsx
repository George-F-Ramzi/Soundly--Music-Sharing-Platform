import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import NotFound from "./pages/not_found";
import ErrorPage from "./pages/error_page";
import LandingPage from "./pages/landing_page";
import NavBar from "./components/nav_bar";
import Player from "./components/player";
import HomePage from "./pages/home_page";
import { GetLikedSongs, HomePageData } from "./api/authorization";
import LikedPage from "./pages/liked_page";
import UploadPage from "./pages/upload";

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
          path: "/liked",
          element: <LikedPage />,
          loader: async () => {
            return defer({ data: GetLikedSongs() });
          },
        },
        {
          path: "/upload",
          element: <UploadPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
}

export default App;
