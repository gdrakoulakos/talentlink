import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/About.module.css"

function About () {
    return (
        <div>
        <Header />
            <div className={styles.aboutContainer}>
            <h1>About Us</h1>
            <h3>Introducing TalentLink: Your Gateway to Movie-Making Excellence!</h3>
            <p>
            At TalentLink, we are the catalyst for cinematic brilliance. With an unwavering commitment to the art of storytelling, we connect visionary filmmakers with the brightest stars of tomorrow. <br/>
            Our platform is your backstage pass to the world of entertainment, where dreams come to life.
            </p>
            <p>
            Our mission is simple: to bridge the gap between talent and opportunity. For aspiring actors, directors, and all industry professionals, TalentLink is the ultimate resource to showcase your craft and discover your next big break. <br/>
            We believe in nurturing raw talent, honing skills, and fostering creative synergy.
            </p>
            <h3>
            What sets TalentLink apart?
            </h3>
            <ul>
                <li>Vast Talent Pool: We boast an extensive database of actors and directors, each meticulously vetted for their skill and dedication.</li>
                <li>Innovative Matching: Our cutting-edge algorithms ensure the perfect match, connecting talents with projects that align with their expertise and aspirations.</li>
                <li>Exclusive Opportunities: We provide exclusive access to auditions, casting calls, and directorial projects from across the industry.</li>
                <li>Personalized Support: Our team of industry experts offers guidance and support at every step of your journey.</li>
                <li>Global Reach: TalentLink transcends borders, offering a global platform for talent discovery and collaboration.</li>
            </ul>
            <p>Join TalentLink today and be a part of the cinematic revolution. Whether you're seeking your next star or aiming to shine in the limelight, TalentLink is where your movie-making dreams take flight. <br/>
            Experience the power of talent, the magic of film, and the future of entertainment, all at TalentLink.</p>
            <p>☎ +30 2733 012 345</p>
            <p>✉ info@talentlink.gr</p>
            <Footer />
            </div>
        </div>
    )
}

export default About;