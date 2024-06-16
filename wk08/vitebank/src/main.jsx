import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from "./App";
import Home from './home';
import BasicExample from './navbar.jsx';

// import "./index.css";
// import glbStr from "./String";

const router = createBrowserRouter([
  //root /
  { 
    // path: `/` , element: <Home />,
    path: `/` , element: <BasicExample />,
    // path: `/` , element: <App />,
    // path: `${glbStr.routeRoot}` , element: <App />,
    children: [{ path: `/`, element: <Home />,},],
  },

    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BasicExample /> */}
  </React.StrictMode>
);