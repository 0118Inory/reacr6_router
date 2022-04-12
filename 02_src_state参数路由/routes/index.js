import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import New from "../pages/New";
import Deatil from "../pages/Deatil";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/about", element: <About /> },
  {
    path: "/home",
    element: <Home />,
    // eslint-disable-next-line no-sparse-arrays
    children:[
          {path: "new", element: <New/> },
          {path: "message", element: <Message/>,
          children:[
              { path:"deatil",
              element:<Deatil/>}
             
          ]
           
        },
    ],
  },
];
