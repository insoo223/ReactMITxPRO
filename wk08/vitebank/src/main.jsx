import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import NavigationBar from './components/Navigation.jsx';
// import App from "./App";
import Home from './Home';
import About from './About';
import Contact from './Contact';

// import BasicExample from './NavBar';
import NavBar2 from './NavBar2';

// import "./index.css";
// import glbStr from "./String";

const router = createBrowserRouter([
  //root 
  { 
    // path: `/` , element: <Home />,
    path: `/` , element: <NavBar2 />,
    // path: `/` , element: <App />,
    // path: `${glbStr.routeRoot}` , element: <App />,
    // children: [{ path: `/`, element: <Home />,},],
  },
  //about
  { 
    path: `/about` , element: <About />,
  },
  //contact
  { 
    path: `/contact` , element: <Contact />,
  },

    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationBar></NavigationBar>
    <RouterProvider router={router} />
    
    {/* <BasicExample /> */}
  </React.StrictMode>
);