import styles from "./button.module.css"

export default function Button({handleClick, children}) {

    return (
        <button className={styles.btn} onClick={handleClick}>{children}</button>
    )
}