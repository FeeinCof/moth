import styles from "./Button.module.css";

interface Props {
  children: String;
  maxWidth?: Boolean;
  small?: Boolean;
}

const Button = ({ children, maxWidth = false, small = false }: Props) => {
  return (
    <button className={`${styles.button} ${small && styles.small}`}>
      {children}
      <div className={styles.button_after}>{children}</div>
    </button>
  );
};

export default Button;
