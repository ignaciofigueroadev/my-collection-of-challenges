import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import styles from "./About.module.css";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Header page={"/"} />
      <section className={styles.about}>
        <article className={styles.aboutArticle}>
          <h2 className={styles.aboutTitle}>
            Welcome to my challenge solutions project!
          </h2>
          <div className={styles.aboutQuotes}>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
          <div className={styles.aboutText}>
            <p>
              My name is Ignacio Figueroa, and I am passionate about frontend
              development. This project emerged as a way for me to share my
              solutions and approaches to the frontend challenges I have
              encountered throughout my career. Here, you will find a collection
              of my solutions to various challenges.
            </p>
            <p>
              Why am I doing this project? The answer is simple: I want to
              contribute to the frontend development community and help other
              developers, especially those who are starting out in this field. I
              understand how challenging it can be to face complex problems, and
              I know the value of having clear examples and solutions.
            </p>
            <p>
              In addition to sharing my current solutions, I also plan to
              regularly update this project with new solutions and challenges. I
              enjoy staying up-to-date with the latest frontend trends and
              technologies, so I aim to provide fresh and relevant content. If
              you have any suggestions for challenges you would like to see or
              any questions about a specific challenge, feel free to reach out
              to me.
            </p>
            <p>
              As this project grows, I also intend to explore new areas related
              to frontend development, such as optimization techniques, testing,
              and best practices.
            </p>
          </div>
        </article>
      </section>
    </motion.div>
  );
};

export default About;
