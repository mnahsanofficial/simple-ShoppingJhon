import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './Loaders/cartProductsLoader.js';
import Checkout from './components/Checkout/Checkout.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';


const router=createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path:'inventory',
        element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path:'checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>

      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
