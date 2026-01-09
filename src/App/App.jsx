import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

function App() {

  /* States */
  const [cartTotal, setCartTotal] = useState(0);
  const [click, setClick] = useState();
  const [products, setProducts] = useState([]);


  const outletContext = { products }

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
  const increment = () => {
    setCartTotal(prevCount => prevCount + 1);
  }
  const decrement = () => {
    setCartTotal(prevCount => prevCount - 1);
  };
  // const handleClick = () => {
  //   setClick();
  // }


  return (
    <>
      <Navbar cartTotal={cartTotal} />
      <Outlet  context={outletContext} />
      <Footer />
    </>
  )
}

export default App
