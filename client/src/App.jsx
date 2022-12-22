import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const Router = createBrowserRouter([{ path: "/" }]);
  return <RouterProvider router={Router} />;
}

export default App;
