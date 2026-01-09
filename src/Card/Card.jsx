import styles from "./card.module.css"
import Button from "../Button/Button"

export default function Card({ imgURL, titleEl, priceEl, descriptionEl }) {
    
    return (
        imgURL && ( 
        <div className={styles.card}>
            <div className={styles.media}> 
                <img src={imgURL} alt="jewelry pieces" />
            </div>
            <div className={styles.contents}>
            <p data-testid="product-title" className={styles.title}>{titleEl}</p>
            <p data-testid="product-price" className={styles.price}>${priceEl}</p>
            {/* <p data-testid="product-description" className={styles.description}>{descriptionEl}</p> */}
            </div>
            <div className= {styles.btn}><Button>Add to Cart</Button> </div>
        </div>
        )
    )
}