import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

function App() {

  /* States */
  const [cartTotal, setCartTotal] = useState(0);
  const [click, setClick] = useState();


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
      <Outlet />
      <Footer />
    </>
  )
}

export default App
