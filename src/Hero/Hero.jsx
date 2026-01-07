import styles from "./hero.module.css"
import heroImg from "../assets/hero.segal.jpg"
import Button from "../Button/Button"

export default function Hero () {

    return (
        <div className= {styles.hero}> 
            <h2>Ice Yourself</h2>
            <img className={styles.img} src= {heroImg} alt="Necklaces around a woman's neck" />
            
             <div className={styles.cta}>
        <Button>Find your new favorite</Button>
      </div>
        </div>
    )
}