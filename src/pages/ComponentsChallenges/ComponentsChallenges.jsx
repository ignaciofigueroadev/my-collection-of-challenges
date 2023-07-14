// Motion import
import { motion } from "framer-motion";

// Component imports
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import Header from "../../components/Header/Header";

// Styles import
import styles from "./ComponentsChallenges.module.css";

// Data import
import data from "./json/componentsChallenges.json";

const ComponentsChallenges = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Header page="/challenges" />
      <section className={styles.componentsChallenges}>
        {data.components.map((component) => (
          <ChallengeCard
            key={component.id}
            img={component.img}
            title={component.title}
            description={component.description}
            technologies={component.technologies}
            github={component.github}
            live={component.live}
          />
        ))}
      </section>
    </motion.div>
  );
};

export default ComponentsChallenges;
