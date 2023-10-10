import Testimonials from "../components/Testimonials";
import reviews from "../src/reviews";

function createCard (character) {
    return (
        <Testimonials 
            key={character.id}
            img={character.imgURL}
            name={character.name}
            role={character.role}
            rating={character.rating}
            comments={character.comments}
        />
    )
}

function Reviews () {
    return (
        <div>
        <h1 className="pageTitle">Reviews</h1>
            <div className="cardContainer">
                {reviews.map(createCard)}
            </div>
        </div>
    )
}

export default Reviews;