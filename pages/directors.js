import PersonList from "../components/PersonList"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Font.module.css"

function Directors () {
	return (
		<div>
        <Header />
		<h1 className={styles.font}>Casting Directors</h1>
		<PersonList species={"Alien"}/>
		<Footer />
		</div>
	);
}

export default Directors;