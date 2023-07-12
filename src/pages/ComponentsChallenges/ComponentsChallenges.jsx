import { motion } from "framer-motion";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import Header from "../../components/Header/Header";
import styles from "./ComponentsChallenges.module.css";

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
        <ChallengeCard
          img="/images/component-images/interactive-rating-component.png"
          title="Interactive rating component"
          description="Challenge of Frontend Mentor"
          technologies="TailwindCSS & Vanilla JS"
          github="https://github.com/ignaciofigueroadev/interactive-rating-component"
          live="https://ignaciofigueroadev.github.io/interactive-rating-component/"
        />
        <ChallengeCard
          img="/images/component-images/advice-generator-app.png"
          title="Advice generator app"
          description="Challenge of Frontend Mentor"
          technologies="TailwindCSS & Vanilla JS (fetch API)"
          github="https://github.com/ignaciofigueroadev/advice-generator-app"
          live="https://ignaciofigueroadev.github.io/advice-generator-app/"
        />
        <ChallengeCard
          img="/images/component-images/stats-preview-card.png"
          title="Stats preview card component"
          description="Challenge of Frontend Mentor"
          technologies="HTML & SASS"
          github="https://github.com/ignaciofigueroadev/stats-preview-card-component"
          live="https://ignaciofigueroadev.github.io/stats-preview-card-component/"
        />
        <ChallengeCard
          img="/images/component-images/profile-card-component.png"
          title="Profile card component"
          description="Challenge of Frontend Mentor"
          technologies="HTML & SASS"
          github="https://github.com/ignaciofigueroadev/Profile-card-component"
          live="https://ignaciofigueroadev.github.io/Profile-card-component/"
        />
        <ChallengeCard
          img="/images/component-images/3-columns-preview-card-component.png"
          title="3 columns preview card component"
          description="Challenge of Frontend Mentor"
          technologies="HTML & SASS"
          github="https://github.com/ignaciofigueroadev/3-Column-preview-card-component"
          live="https://ignaciofigueroadev.github.io/3-Column-preview-card-component/"
        />
        <ChallengeCard
          img="/images/component-images/nft-preview-card-component.png"
          title="NFT preview card component"
          description="Challenge of Frontend Mentor"
          technologies="HTML & CSS"
          github="https://github.com/ignaciofigueroadev/NFT-preview-card-component"
          live="https://ignaciofigueroadev.github.io/NFT-preview-card-component/"
        />
        <ChallengeCard
          img="/images/component-images/product-preview-card-component.png"
          title="Product preview card component"
          description="Challenge of Frontend Mentor"
          technologies="HTML & CSS"
          github="https://github.com/ignaciofigueroadev/Product-preview-card-component"
          live="https://ignaciofigueroadev.github.io/Product-preview-card-component/"
        />
        <ChallengeCard
          img="/images/component-images/order-summary-card-component.png"
          title="Order summary card component"
          description="Challenge of Frontend Mentor"
          technologies="HTML & CSS"
          github="https://github.com/ignaciofigueroadev/Order-sumary-card-component"
          live="https://ignaciofigueroadev.github.io/Order-sumary-card-component/"
        />
        <ChallengeCard
          img="/images/component-images/qr-code-component.png"
          title="QR code component challenge"
          description="Challenge of Frontend Mentor"
          technologies="HTML & CSS"
          github="https://github.com/ignaciofigueroadev/qr-code-component"
          live="https://ignaciofigueroadev.github.io/qr-code-component/"
        />
      </section>
    </motion.div>
  );
};

export default ComponentsChallenges;
