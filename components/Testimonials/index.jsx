import styles from "../Testimonials/Testimonials.module.css"

function Testimonials (props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <img className={styles.characterImage} src={props.img} alt={props.name} />
                <h2>{props.name}</h2>
                <h3>{props.role}</h3>
                <div className={styles.cardBottom}>
                    <p>{props.rating}</p>
                    <p>{props.comments}</p>
            </div>
        </div>
    </div>
    )
}

export default Testimonials;