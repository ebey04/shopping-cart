import styles from "./card.module.css"
import Button from "../Button/Button"
import { useOutletContext } from 'react-router-dom';

export default function Card() {
const { imgURL, titleEl, priceEl, descriptionEl } = useOutletContext();
    
    return (
        imgURL && ( 
        <div className={styles.card}>
            <img src={imgURL} alt="jewelry pieces" />
            <p data-testid="product-title" className={styles.title}>{titleEl}</p>
            <p data-testid="product-price" className={styles.price}>{priceEl}</p>
            <p data-testid="product-description" className={styles.description}>{descriptionEl}</p>
            <Button>Add to Cart</Button>
        </div>
        )
    )
}