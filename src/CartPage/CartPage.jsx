import styles from "./cart-page.module.css"
import CartItem from '../Cart Item/CartItem'
import { useOutletContext } from 'react-router-dom';

export default function CartPage () {
    const { products, cartItems } = useOutletContext();

    return(
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


    )
}