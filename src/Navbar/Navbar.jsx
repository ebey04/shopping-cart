import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg"

export default function Navbar ({cartItems}) {

    return (
        <div className={styles.container}>
            <h1>Mystic Jewels</h1>
            <nav>
                <Link className={styles.navLink} to="/">Home</Link>
                <Link className={styles.navLink} to="/shop">Shop Jewelry</Link>
                <div className={styles.cartIcon}>
                    <Link className={styles.navLink} to="/cart"><img src={cart} alt="shopping cart icon" /> {cartItems.length}</Link>
                </div>
            </nav>
        </div>
    )
}