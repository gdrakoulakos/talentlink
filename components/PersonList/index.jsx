import { useEffect, useState } from "react";
import styles from "./PersonList.module.css"

function PersonList (props) {
    const [characters, setCharacters] = useState ([]);
    useEffect(() => {
        const callAPI = async () => {
            try {
                const res = await fetch(
                    "https://rickandmortyapi.com/api/character"
                );
                const data = await res.json();
                const charactersInfo = data.results;

                const filteredCharacters = charactersInfo.filter((character) => {
                    return character.species === props.species
                })
               
                setCharacters(filteredCharacters)
                
                } catch (err) {
                console.log(err);
                }
        }
        callAPI();
    }, []);
    return (
        <div className="cardContainer">
            {characters.map ((character) => (
            <div className={styles.cardInfo} key={character.id}>
                <div className={styles.cardImage}>
                    <img className={styles.characterImage} src={character.image} alt={character.name} />
                </div>
                <div className={styles.cardTop}>
                    <h1>{character.name}</h1>
                </div>
                <div className={styles.cardBottomContainer}>
                    <div className={styles.cardBottomLeft}>
                    <ul>
                        <li>Status</li>
                        <li>Species</li>
                        <li>Gender</li>
                        <li>Location</li>
                    </ul>
                    </div>
                    <div className={styles.cardBottomRight}>
                    <ul>
                        <li>: {character.status}</li>
                        <li>: {character.species}</li>
                        <li>: {character.gender}</li>
                        <li>: {character.location.name}</li>
                    </ul>
                    </div>
                </div>
            </div>
            ))}
        </div>
        
    )
}

export default PersonList;