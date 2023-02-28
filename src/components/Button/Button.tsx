import styles from "./Button.module.css";

interface Props {
  children: String;
  maxWidth?: Boolean;
}

const Button = ({ children, maxWidth = false }: Props) => {
  return (
    <button className={`${styles.button}`}>
      {children}
      <div className={styles.button_after}>{children}</div>
    </button>
  );
};

export default Button;
