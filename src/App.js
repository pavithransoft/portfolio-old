import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Intro from "./pages/Intro";
import Creativity from "./pages/Creativity";
import FindMe from "./pages/FindMe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Intro />,
        },
        {
          path: "creativity",
          element: <Creativity />,
        },
        {
          path: "findme",
          element: <FindMe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
