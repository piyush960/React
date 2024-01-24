import styles from './Card.module.css'  // for module styling

function Card(){

    const card = {      // inline styling
        maxWidth: "250px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
        textAlign: "center",
        borderRadius: "10px",
        display: "inline-block",
        padding: "10px",
        margin: "10px",
    }
    
    return(
        <div className={styles.card}>
            <img src="https://via.placeholder.com/150" alt="my image" />
            <h2>Alex</h2>
            <p>I am a coder</p>
        </div>
    )
}

export default Card