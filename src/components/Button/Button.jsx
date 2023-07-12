import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.button}>
      <span>{props.title}</span>
      <i>{props.icon}</i>
    </button>
  );
};

export default Button;
