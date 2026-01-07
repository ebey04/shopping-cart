import styles from "./hero.module.css"
import heroImg from "../assets/hero.segal.jpg"

export default function Hero () {

    return (
        <div className= {styles.hero}> 
            <h2>Ice Yourself</h2>
            <img src= {heroImg} alt="Necklaces around a woman's neck" />
        </div>
    )
}