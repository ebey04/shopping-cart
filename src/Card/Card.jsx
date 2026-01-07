import styles from "./card.module.css"
import Button from "../Button/Button"
import { useOutletContext } from 'react-router-dom';

export default function Card() {
const { imgURL } = useOutletContext();
    
    return (
        imgURL && ( 
        <div className={styles.card}>
            <img src={imgURL} alt="jewelry pieces" />
            <p className={styles.price}>$48.88</p>
            <p className={styles.title}>Gold Necklace</p>
            <p className={styles.description}>blah blah blah</p>
            <Button>Add to Cart</Button>
        </div>
        )
    )
}