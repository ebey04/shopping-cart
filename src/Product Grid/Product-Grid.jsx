import styles from "./product-grid.module.css"
import Card from "../Card/Card"
import { useOutletContext } from 'react-router-dom';

export default function ProductGrid() {
    const { products, addToCart } = useOutletContext();

    return(
        <div className={styles.grid}> 

        {products.map(product => (
            <Card 
            key= {product.id} 
            product = {product}
            imgURL= {product.image} 
            titleEl= {product.title} 
            priceEl= {product.price} 
            descriptionEl= {product.description}
            addToCart= {addToCart}
            />
            ))}

        </div>
    )
}

