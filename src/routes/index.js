import About from "../pages/About";
import Home from "../pages/Home";
// import Message from "../pages/Message";
// import New from "../pages/New";
import Deatil from "../pages/Deatil";
import Dynamic from "../pages/Dynamic";
import Carousel3D from '../pages/Carousel3D'
import { Navigate } from "react-router-dom";
import Downlow from '../pages/Downlow'
import Dribbble from '../pages/Dribbble'
import Dribbble1 from '../pages/Dribbble1'
import Line from '../pages/Line'
import ChinaMap from '../pages/ChinaMap'
// import LogoCouml from '../pages/LogoCouml'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/about", element: <About /> },
  {
    path: "/home",
    element: <Home />,
    // eslint-disable-next-line no-sparse-arrays
    children:[   
      {path: "downlow", element: <Downlow/> },
      {path: "carousel3D", element: <Carousel3D/>, },
      {path: "dynamic", element: <Dynamic/> },
      // {path: "logoCouml", element: <LogoCouml/> },
      {path: "dribbble", element: <Dribbble/> },
      {path: "dribbble1", element: <Dribbble1/> },
      {path: "line", element: <Line/> },
      {path: "ChinaMap", element: <ChinaMap/> },

    ],
  },
  // { path: "/Home", element: <Home /> },

];
