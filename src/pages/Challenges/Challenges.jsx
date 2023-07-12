import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import styles from "./Challenges.module.css";

const PageChallenges = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Header page="/" />
      <section className={styles.challenges}>
        <Link to={"/components-challenges"}>
          <Card
            src={"/images/qr-code-component.jpg"}
            title="Components"
            text="On this section you can see the component challenges that I've done!"
          />
        </Link>

        <Link to={"/pages-challenges"}>
          <Card
            src={"/images/news-homepage.jpg"}
            title="Pages"
            text="On this section you can see the page challenges that I've done!"
          />
        </Link>
      </section>
    </motion.div>
  );
};

export default PageChallenges;
