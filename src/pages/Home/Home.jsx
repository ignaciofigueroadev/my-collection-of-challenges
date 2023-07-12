import {
  faArrowRight,
  faCircleInfo,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <main className={styles.home}>
        <section className={styles.homeSection}>
          <div className={styles.homeDiv}>
            <h1 className={styles.homeTitle}>I'm Ignacio</h1>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className={styles.homeMobileIcon}
            />
          </div>
          <div>
            <p className={styles.homeDescription}>
              In this page I want to show you the challenges that I've done
            </p>
            <div className={styles.homeButtonsSection}>
              <Link to={"/challenges"} className={styles.homeLink}>
                <Button
                  className={styles.homeButton}
                  title="Challenges"
                  icon={
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={styles.homeArrowIcon}
                    />
                  }
                />
              </Link>
              <Link to={"/about"}>
                <Button
                  title="About"
                  icon={<FontAwesomeIcon icon={faCircleInfo} />}
                />
              </Link>
            </div>
          </div>
        </section>
        <FontAwesomeIcon
          icon={faLaptopCode}
          className={styles.homeComputerIcon}
        />
      </main>
    </motion.div>
  );
};

export default Home;
