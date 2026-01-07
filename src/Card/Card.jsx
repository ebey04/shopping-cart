import styles from "./card.module.css"

export default function Card() {

    
    return (
        <div className={styles.card}>
            <img src="" alt="" />
            <p className={styles.price}>$48.88</p>
            <p className={styles.title}>Gold Necklace</p>
            <p className={styles.description}>blah blah blah</p>
        </div>
    )
}