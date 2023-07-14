// Motion import
import { motion } from "framer-motion";

// Component imports
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import Header from "../../components/Header/Header";

// Styles import
import styles from "./PagesChallenges.module.css";

// Data import
import data from "./json/pagesChallenges.json";

const PagesChallenges = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Header page="/challenges" />
      <section className={styles.pagesChallenges}>
        {data.pages.map((page) => (
          <ChallengeCard
            key={page.id}
            img={page.img}
            title={page.title}
            description={page.description}
            technologies={page.technologies}
            github={page.github}
            link={page.live}
          />
        ))}
      </section>
    </motion.div>
  );
};

export default PagesChallenges;
