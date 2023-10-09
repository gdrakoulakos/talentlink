import PersonList from "../components/PersonList"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Font.module.css"

function Actors () {
	return (
		<div>
        <Header />
		<h1 className={styles.font}>Actors</h1>
		<PersonList species={"Human"}/>
		<Footer />
		</div>
	);
}

export default Actors;