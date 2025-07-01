import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Category from "./pages/Category.jsx";
import BookDetails from "./pages/BookDetails.jsx";

// Router components:
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error!</div>, // for all other errors than 404
    children: [
      {
        index: true, //this will be shown by default
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/category/:categoryId",
        element: <Category />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "*", // "wild card" (all paths) route for 404
    element: <p>Error: 404 Not Found</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

/*

1. Replace `<BrowserRouter>` usage in `src/main.jsx` with `createBrowserRouter` setup.
2. Define routes for home, favorites, categories, and book detail pages using the router object.



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
*/
