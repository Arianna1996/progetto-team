import styles from "./Button.module.css";
const Button = (props) => {
  const clickHandler = (event) => {
    props.click(event.target.value);
  };

  return (
    <button
      className={styles.itemButton}
      onClick={clickHandler}
      value={props.value}
    >
      {props.children}
    </button>
  );
};
export default Button;
