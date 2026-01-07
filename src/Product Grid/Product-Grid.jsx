import styles from "./product-grid.module.css"
import Card from "../Card/Card"

export default function ProductGrid() {
    

    return(
        <div className={styles.grid}> 
        <Card />
        <Card />
        <Card />
        </div>
    )
}