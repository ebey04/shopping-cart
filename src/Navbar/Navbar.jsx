import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg"

export default function Navbar () {

    return (
        <div className={styles.container}>
            <h1>Mystic Jewels</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop Jewelry</Link>
                <Link to="/cart"><img src={cart} alt="shopping cart icon" /></Link>
            </nav>
        </div>
    )
}