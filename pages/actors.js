import PersonList from "../components/PersonList"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Actors () {
	return (
		<div>
        <Header />
		<h1>Actors</h1>
		<PersonList species={"Human"}/>
		<Footer />
		</div>
	);
}

export default Actors;