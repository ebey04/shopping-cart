import styles from "./card.module.css"
import Button from "../Button/Button"
import { useOutletContext } from 'react-router-dom';
import { useState} from 'react';

export default function Card({ product}) {
    const { addToCart, products, cartItems, increment, decrement, removeFromCart } = useOutletContext();
    

    const cartItem = cartItems.find(item => item.id === product.id);
    const inCart = Boolean(cartItem);
    const quantity = cartItem?.quantity ?? 0;


    return (
        product.image && ( 
        <div className={styles.card}>
            <div className={styles.media}> 
                <img src={product.image} alt="jewelry pieces" />
            </div>
            <div className={styles.contents}>
            <p data-testid="product-title" className={styles.title}>{product.title}</p>
            <p data-testid="product-price" className={styles.price}>${product.price}</p>
            </div>
            <div className= {styles.btn}>
                {inCart ? (
                    quantity > 0? (
                        <div className={styles.qty}>
                            <Button onClick={() => decrement(product.id)}>-</Button>
                            <span>{quantity}</span>
                            <Button onClick={() => increment(product.id)}>+</Button>
                        </div> 
                        ) : (
                        <Button onClick={() => removeFromCart(product)}>Remove from Cart</Button>
                        )
                    ) : (
                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                )}
            </div>
        </div>
        )
    )
}