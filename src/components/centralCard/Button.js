import styles from "./Button.module.css";
const Button = (props) => {
  const clickHandler = (event) => {
    props.click(event.target.value);
  };

  const modalHandler = (props) => {
    console.log(props.show);
  };
  return (
    <button
      className={styles.itemButton}
      onClick={props.show ? modalHandler : clickHandler}
      value={props.value}
    >
      {props.children}
    </button>
  );
};
export default Button;
