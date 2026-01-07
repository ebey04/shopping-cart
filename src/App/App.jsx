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

  const outletContext = {imgURL}

  /* Effects */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")

    .then((response) => response.json())
    .then((response) => setImgURL(response[0].image))
    .catch((e) => console.error(e));
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
