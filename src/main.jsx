import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './ErrorPage';
import Home from './pages/Home';
import MainLayout from './MainLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import DoctorCard from './components/DoctorCard';
import AuthProvider from './AuthProvider';
import HealthSupport from './components/supports/HealthSupport';
import HealthBlog from './components/healthBlogs/HealthBlog';
import HealthDonation from './components/healthDonation/HealthDonation';
import PrivetRout from './PrivetRout';
import BlogPage from './pages/BlogPage';
import DonationPage from './pages/DonationPage';
import SecretRout from './SecretRout';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/doctor/:id",
        element:<PrivetRout><DoctorCard/></PrivetRout>,
        loader: () => fetch('/doctors.json')
      },
      {
        path:"/support/:id",
        element:<PrivetRout><HealthSupport/></PrivetRout>,
        loader: () => fetch('/support.json')
      },
      {
        path:"/blog/:id",
        element:<PrivetRout><HealthBlog/></PrivetRout>,
        loader: () => fetch('/blod.json')
      },
      {
        path:"/donation/:id",
        element:<PrivetRout><HealthDonation/></PrivetRout>,
        loader: () => fetch('/donation.json')
      },
      {
        path:"blogPage",
        element:<SecretRout><BlogPage/></SecretRout>
      },
      {
        path:"donationPage",
        element:<SecretRout><DonationPage/></SecretRout>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
