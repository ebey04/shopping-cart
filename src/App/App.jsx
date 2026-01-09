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
  const [imgURL, setImgURL] = useState(null);
  const [titleEl, setTitleEl] = useState(null);
  const [priceEl, setPriceEl] = useState(null);
  const [descriptionEl, setDescriptionEl] = useState(null);

  const outletContext = {imgURL, titleEl, priceEl, descriptionEl }

  /* Effects */
  UseEffect(() => {
    async function fetchData() {
      const url = "https://fakestoreapi.com/products/category/jewelery";
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const setImgURL = data[0].image;
        const setTitleEl = data.title;
        const setPriceEl = data.price;
        const setDescriptionEl = data.description;
        
      } catch (error) {
        console.error("Fetch operation failed:", error);
      }
    }
  })

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
