import styles from "./Header.module.css"

function Header () {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInfo}>
            <a href="https://talentlink-pi.vercel.app/"><img className={styles.logo} src="./images/logo.png" /></a>
            </div>
            <div className={styles.headerButtons}>
                <a href="https://talentlink-pi.vercel.app/">Home</a>
                <a href="https://talentlink-pi.vercel.app/actors">Actors</a>
                <a href="https://talentlink-pi.vercel.app/directors">Casting Directors</a>
                <a href="https://talentlink-pi.vercel.app/reviews">Reviews</a>
                <a href="https://talentlink-pi.vercel.app/about">About Us</a>
            </div>
        </div>
    )
}

export default Header;

