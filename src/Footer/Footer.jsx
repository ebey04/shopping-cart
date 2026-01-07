import styles from "./footer.module.css"
import { Link } from "react-router-dom";

export default function Footer() {

    return(
        <div className={styles.footer}>
            <h4 className={styles.info}>Design by Elizabeth Bey 2026 ©</h4>
            <div className= {styles.footLinks}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}