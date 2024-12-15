import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Details from "./pages/Details";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Categories",
          element: <Categories />,
          children: [
            {
              path: "populars",
              element: <h1>Popular Novels Page</h1>,
            },
            {
              path: "bestsellers",
              element: <h1>Best Sellers Page</h1>,
            },
            {
              path: "romantics",
              element: <h1>Romantics Page</h1>,
            },
          ],
        },
        {
          path: "/Details/:id",
          element: <Details />,
        },
        {
          path: "*",
          element: <NotFound/>
        }
      ],
    },
  ]);
  const App =()=>{
    return <RouterProvider router={router} />;
  };
  


export default App;
