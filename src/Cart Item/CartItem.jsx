import styles from "./cart-item.module.css"
import { useOutletContext } from 'react-router-dom';
import Button from "../Button/Button"

export default function CartItem({item}) {
    const { products, cartItems } = useOutletContext();

    return (
        <div className= {styles.prodRow}>
            <div className={styles.media}> 
                <img src={item.image} alt="jewelry pieces" />
            </div>
            <div className={styles.qty}>
                <Button onClick={() => decrement(item.id)}>-</Button>
                <span>{item.quantity}</span>
                <Button onClick={() => increment(item.id)}>+</Button>
            </div>

            <div className= {styles.subtotal}>
                <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
        </div>


    )
}