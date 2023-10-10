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
            {reviews.map(createCard)}
        </div>
    )
}

export default Reviews;