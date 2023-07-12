import { motion } from "framer-motion";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import Header from "../../components/Header/Header";
import styles from "./PagesChallenges.module.css";

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
        <ChallengeCard
          img="/images/pages-images/sunnysude-agency-landing-page.png"
          title="Sunnyside agency landing page"
          description="Challenge of Frontend Mentor"
          technologies="HTML & SASS | vanilla JS"
          github="https://github.com/ignaciofigueroadev/sunnyside-agency-landing-page"
          live="https://ignaciofigueroadev.github.io/sunnyside-agency-landing-page/"
        />
        <ChallengeCard
          img="/images/pages-images/loopstudios-landing-page.png"
          title="Loopstudios landing page"
          description="Challenge of Frontend Mentor"
          technologies="HTML & SASS | vanilla JS"
          github="https://github.com/ignaciofigueroadev/loopstudios-landing-page/tree/main"
          live="https://ignaciofigueroadev.github.io/loopstudios-landing-page/"
        />
        <ChallengeCard
          img="/images/pages-images/interior-consultant-challenge.png"
          title="Interior consultant challenge"
          description="Challenge of devChallenges"
          technologies="HTML & SASS | vanilla JS"
          github="https://github.com/ignaciofigueroadev/interior-consultant-challenge"
          live="https://ignaciofigueroadev.github.io/interior-consultant-challenge/"
        />
        <ChallengeCard
          img="/images/pages-images/news-homepage-challenge-main.jpg"
          title="News homepage main challenge"
          description="Challenge of Frontend Mentor"
          technologies="Reactjs | SASS"
          github="https://github.com/ignaciofigueroadev/news-homepage-main"
          live="https://ignaciofigueroadev.github.io/news-homepage-main/"
        />
      </section>
    </motion.div>
  );
};

export default PagesChallenges;
