import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const UserContext = React.createContext(null);

import glbStr from "./String";

// function Spa() {
//   return (
//     <HashRouter>
//       <NavBar/>
//       <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
//         <div className="container" style={{padding: "20px"}}>
//           <Route path="/" exact component={Home} />
//           <Route path="/CreateAccount/" component={CreateAccount} />
//           <Route path="/login/" component={Login} />
//           <Route path="/deposit/" component={Deposit} />
//           <Route path="/withdraw/" component={Withdraw} />
//           <Route path="/balance/" component={Balance} />
//           <Route path="/alldata/" component={AllData} />
//         </div>                    
//       </UserContext.Provider>      
//     </HashRouter>
//   );
// }

// ReactDOM.render(
//   <Spa/>,
//   document.getElementById('root')
// );

const router = createBrowserRouter([
  //root /
  { path: `${glbStr.routeRoot}` , element: <Home />,
    },
    // children: [{ path: `${glbStr.routeRoot}`, element: <TestFirst />,},],},

  //edit /edit/:id
  // { path: `${glbStr.routeEditWithID}`, element: <App />,
  //   children: [{ path: `${glbStr.routeEditWithID}`,element: <Record />,},],},
  
  //create /create
  // { path: `${glbStr.routeCreate}`, element: <App />,
    // children: [{ path: `${glbStr.routeCreate}`, element: <Record />,},],},
  
  //PIPEcreate /create
  // { path: `${glbStr.routePipeCreate}`, element: <AppPipe />,
  //   children: [{ path: `${glbStr.routePipeCreate}`,element: <Pipe />,},],},

  // { path: `${glbStr.routePipeWithID}`, element: <AppPipe />,
  //   children: [{ path: `${glbStr.routePipeWithID}`,element: <Pipe />,},],},
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);