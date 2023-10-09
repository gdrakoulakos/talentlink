import styles from "./Footer.module.css"

function Footer () {
    return(
        <footer className={styles.footerContainer}>© {new Date().getFullYear()} George Drakoulakos </footer>
    )
}

export default Footer;
