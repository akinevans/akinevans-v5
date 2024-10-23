import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}

    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </StrictMode>
);
