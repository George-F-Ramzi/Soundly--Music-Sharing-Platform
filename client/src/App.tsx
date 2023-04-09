import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePageData } from "./api/authorization";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import NavBar from "./elements/navBar";
import NotFound from "./pages/notFound";
import { HomePageType } from "./lib/types.def";
import Player from "./elements/player";
import ErrorPage from "./pages/errorPage";

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
          loader: async (): Promise<HomePageType> => {
            return await HomePageData();
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
}

export default App;
