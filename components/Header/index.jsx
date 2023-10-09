import styles from "./Header.module.css"

function Header () {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInfo}>
            <a href="http://localhost:3000/"><img className={styles.logo} src="./images/logo.png" /></a>
            </div>
            <div className={styles.headerButtons}>
                <a href="http://localhost:3000">Home</a>
                <a href="http://localhost:3000/actors">Actors</a>
                <a href="http://localhost:3000/directors">Casting Directors</a>
                <a href="http://localhost:3000/reviews">Reviews</a>
                <a href="http://localhost:3000/about">About Us</a>
            </div>
        </div>
    )
}

export default Header;

