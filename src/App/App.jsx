import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from '../Navbar/Navbar';

function App() {

  /* States */
  const [cartTotal, setCartTotal] = useState(0)


  /*Functions*/
  const increment = () => {
    setCartTotal(prevCount => prevCount + 1);
  }
  const decrement = () => {
    setCartTotal(prevCount => prevCount - 1);
  };


  return (
    <>
      <Navbar cartTotal={cartTotal} />
      <Outlet />
      {/* Footer */}
    </>
  )
}

export default App
