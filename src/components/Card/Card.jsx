import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.src} className={styles.cardImage} loading="lazy" />
      <div className={styles.cardInfoSection}>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <p className={styles.cardText}>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
