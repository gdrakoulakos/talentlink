import styles from "../Testimonials/Testimonials.module.css"

function Testimonials (props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img className={styles.characterImage} src={props.img} alt={props.name} />
            </div>
            <div>
                <h2>{props.name}</h2>
                <h3>{props.role}</h3>
            </div>
            <div className={styles.cardBottom}>
                <p>{props.rating}</p>
                <p>{props.comments}</p>
            </div>
        </div>
    )
    
}

export default Testimonials;