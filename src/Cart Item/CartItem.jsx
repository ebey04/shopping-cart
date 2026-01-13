import styles from "./cart-item.module.css";
import { useOutletContext } from "react-router-dom";
import Button from "../Button/Button";

export default function CartItem({ item }) {
    const { increment, decrement, removeFromCart } = useOutletContext();

    const quantity = item.quantity;

    return (
        <div className={styles.prodRow}>
        <div className={styles.media}>
            <img src={item.image} alt="jewelry pieces" />
        </div>

        {quantity > 0 ? (
            <div className={styles.qty}>
                <Button onClick={() => decrement(item.id)}>-</Button>
                <span>{quantity}</span>
                <Button onClick={() => increment(item.id)}>+</Button>
            </div>
        ) : (
            <Button className={styles.delete} onClick={() => removeFromCart(item)}>Remove from Cart</Button>
        )}
        <div className={styles.subtotal}>
            <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
        </div>
    );
}
