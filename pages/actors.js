import PersonList from "../components/PersonList"

function Actors () {
	return (
		<div>
		<h1 className="pageTitle">Actors</h1>
		<PersonList species={"Human"}/>
		</div>
	);
}

export default Actors;