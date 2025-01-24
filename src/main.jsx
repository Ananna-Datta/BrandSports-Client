import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout.jsx/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddEquipment from "./Pages/AddEquipment";
import AllEquipments from "./Pages/AllEquipments";
import PrivateRoutes from "./Utils/PrivateRoutes";
import MyEquipment from "./Pages/MyEquipment"
import DetailsEquipment from "./Pages/DetailsEquipment";
import UpdateEquipment from "./Pages/UpdateEquipment";
import AllEquipment from "./Pages/AllEquipment";

<ToastContainer />

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://brand-sports.vercel.app/equipment'),
      },
      {
        path: "/all",
        element: 
        <AllEquipments></AllEquipments>,
        loader: () => fetch('https://brand-sports.vercel.app/equipment')
      },
      {
        path: "/add",
        element: (
          <PrivateRoutes>
            <AddEquipment />
          </PrivateRoutes>
        ),
      },
      {
        path: 'equipment/:id',
        element:(
          <PrivateRoutes>
            <DetailsEquipment></DetailsEquipment>,
          </PrivateRoutes>
        ),
        
        loader: ({ params }) => fetch(`https://brand-sports.vercel.app/equipment/${params.id}`)
      },
      {
        path: "/myequip",
        element: 
        (
          <PrivateRoutes>
            <MyEquipment></MyEquipment>,
          </PrivateRoutes>
        ),
      },
      {
        path: '/updateequip/:id',
        element: (
          <PrivateRoutes>
            <UpdateEquipment></UpdateEquipment>,
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://brand-sports.vercel.app/equipment/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
