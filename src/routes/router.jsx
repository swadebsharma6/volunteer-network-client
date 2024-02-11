import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Donation from "../Pages/Donation/Donation";
import Events from "../Pages/Events/Events";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
           path: '/donation',
           element: <Donation/> 
        },
        {
            path: '/events',
            element:<Events/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/login',
          element: <Login/>
        }
      ]
    },
  ]);