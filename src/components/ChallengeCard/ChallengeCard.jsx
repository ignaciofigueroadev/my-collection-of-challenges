import arrowUpRight from "../../assets/icons/arrow-up-right-from-square.svg";
import gitHubIcon from "../../assets/icons/github.svg";
import styles from "./ChallengeCard.module.css";

const ChallengeCard = (props) => {
  return (
    <div className={styles.challengeCard}>
      <div>
        <img
          src={props.img}
          alt="This is a challenge image"
          className={styles.challengeCardImage}
        />
      </div>
      <div className={styles.challengeCardInfo}>
        <h3 className={styles.challengeCardTitle}>{props.title}</h3>
        <div>
          <p className={styles.challengeCardDescription}>{props.description}</p>
          <p className={styles.challengeCardTechnologies}>
            Built with: {props.technologies}
          </p>
        </div>
        <div className={styles.challengeCardLinks}>
          <a
            href={props.github}
            target="_blank"
            className={styles.challengeCardLink}
          >
            <img
              src={gitHubIcon}
              alt="Go to repository"
              className={styles.challengeCardIcon}
            />
          </a>
          <a
            href={props.live}
            target="_blank"
            className={styles.challengeCardLink}
          >
            <img
              src={arrowUpRight}
              alt="Go to Live URL"
              className={styles.challengeCardIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
