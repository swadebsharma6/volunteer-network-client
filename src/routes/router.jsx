import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Blogs from "../Pages/Blogs/Blogs";
import Donation from "../Pages/Donation/Donation";
import Events from "../Pages/Events/Events";
import Home from "../Pages/Home/Home/Home";
import PrivetRoutes from "../components/Provider/PrivetRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: '/',
            element: <Home/>,
            loader: ()=> fetch('http://localhost:5000/activites')
        },
        {
           path: '/donation',
           element: <PrivetRoutes><Donation/> </PrivetRoutes>
        },
        {
            path: '/events',
            element:<Events/>
        },
        {
            path: '/blogs',
            element:<Blogs/>
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