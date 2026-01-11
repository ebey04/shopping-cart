import styles from "./card.module.css"
import Button from "../Button/Button"
import { useOutletContext } from 'react-router-dom';

export default function Card({ imgURL, titleEl, priceEl}) {
    const { addToCart, products } = useOutletContext();
    const product = {
        imgURL,
        titleEl,
        priceEl,
    };

    return (
        imgURL && ( 
        <div className={styles.card}>
            <div className={styles.media}> 
                <img src={imgURL} alt="jewelry pieces" />
            </div>
            <div className={styles.contents}>
            <p data-testid="product-title" className={styles.title}>{titleEl}</p>
            <p data-testid="product-price" className={styles.price}>${priceEl}</p>
            </div>
            <div className= {styles.btn}><Button onClick={() => addToCart(product)}>Add to Cart</Button> </div>
        </div>
        )
    )
}