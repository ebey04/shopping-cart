import styles from "./cart-page.module.css"
import CartItem from '../Cart Item/CartItem'
import Button from '../Button/Button'
import { useOutletContext } from 'react-router-dom';

export default function CartPage () {
    const { products, cartItems } = useOutletContext();
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
        );


    return(
        <div>
            <h3>Your Cart</h3>
            <div className= {styles.grid}>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item= {item}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </div>
            <div className={styles.bottom}>
                <div className={styles.notes}>
                    <p>Gift Note/Additional Instruction</p>
                    <textarea name="addInfo" rows="4" cols="30" />
                </div>
                <div className={styles.totals}> 
                    <p>Estimated Total: ${total}</p>
                    <p>Taxes, discounts and shipping calculated at checkout.</p>
                    <Button>Check Out</Button>
                </div>
            </div>
</div>

    )
}