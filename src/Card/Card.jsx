import styles from "./card.module.css"
import Button from "../Button/Button"
import { useOutletContext } from 'react-router-dom';

export default function Card() {
const { imgURL } = useOutletContext();
    
    return (
        imgURL && ( 
        <div className={styles.card}>
            <img src={imgURL} alt="jewelry pieces" />
            <p data-testid="product-title" className={styles.title}></p>
            <p className={styles.price}></p>
            <p className={styles.description}></p>
            <Button>Add to Cart</Button>
        </div>
        )
    )
}