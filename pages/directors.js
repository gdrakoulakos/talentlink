import PersonList from "../components/PersonList"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Directors () {
	return (
		<div>
        <Header />
		<h1>Casting Directors</h1>
		<PersonList species={"Alien"}/>
		<Footer />
		</div>
	);
}

export default Directors;