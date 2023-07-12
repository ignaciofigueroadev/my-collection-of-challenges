import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const BackPage = (props) => {
  return (
    <header className={styles.header}>
      <div>
        <Link to={props.page}>
          <FontAwesomeIcon icon={faArrowLeft} className={styles.headerArrow} />
        </Link>
      </div>
      <h2 className={styles.headerLogo}>Nac.</h2>
    </header>
  );
};

export default BackPage;
