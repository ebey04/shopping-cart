import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App/App'
import Cart-Page from './Cart Page'
import Homepage from './Homepage'
import Shop-Page from './Shop Page'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Homepage />},
      {path: "shop", element: <Shop-Page />},
      {path: "cart", element: <Cart-Page />,}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
