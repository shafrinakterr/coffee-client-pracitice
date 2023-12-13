import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainlayOut from './component/mainLayOut/MainlayOut';
import AddCoffee from './component/addCoffee/AddCoffee';
import Home from './component/home/Home';
import Instagram from './component/instagram/Instagram';
import UpdatedCoffee from './component/updatedCoffee/UpdatedCoffee';
import SingIn from './component/singIn/SingIn';
import SingUP from './component/singUp/SingUP';
import Authprovider from './component/authprovider/Authprovider';
import Users from './component/users/Users';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://practice-server-rust.vercel.app/coffee')
      },
      {
        path: '/instagram',
        element: <Instagram></Instagram>
      },
      {
        path: '/coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updatedCoffee/:id',
        element: <UpdatedCoffee></UpdatedCoffee>,
        loader: ({ params }) => fetch(`https://practice-server-ltdw5xolq-shafrin-akters-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/singIn',
        element: <SingIn></SingIn>
      },
      {
        path: '/singUp',
        element: <SingUP></SingUP>
      },
      {
        path:'/user',
        element:<Users></Users>,
        loader:()=>fetch('https://practice-server-ltdw5xolq-shafrin-akters-projects.vercel.app/user')
      }
    ]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
