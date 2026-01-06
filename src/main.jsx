import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App/App'
import CartPage from './CartPage/CartPage'
import Homepage from './Homepage/Homepage'
import ShopPage from './ShopPage/ShopPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Homepage />},
      {path: "shop", element: <ShopPage />},
      {path: "cart", element: <CartPage />,}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
