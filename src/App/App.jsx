import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

function App() {

  /* States */
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);



  /* Effects */
  useEffect(() => {
    async function fetchData() {
      const url = "https://fakestoreapi.com/products/category/jewelery";
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
        
      } catch (error) {
        console.error("Fetch operation failed:", error);
      }
    }
    fetchData();
  }, []);

  /*Functions*/
const addToCart = (product) => {
  setCartItems(items => {
    const existing = items.find(item => item.id === product.id);
    if (existing) {
      return items.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...items, { ...product, quantity: 1 }];
  });
};

const increment = (id) => {
  setCartItems(items =>
    items.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decrement = (id) => {
  setCartItems(items =>
    items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    )
  );
};



  const outletContext = { products, addToCart, cartItems, increment, decrement }


  return (
    <>
      <Navbar cartItems={cartItems} />
      <Outlet  context={outletContext} />
      <Footer />
    </>
  )
}

export default App
