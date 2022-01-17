import { useState } from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  const [index, setIndex] = useState(0);
  const clickHandler = (event) => {
    let takeEvent = event.target.value;
    props.click(takeEvent);
  };

  const modalHandler = (props) => {
    console.log(props.show);
  };

  const buttonActive = (id) => {
    setIndex(id);
    console.log(props.id);
  };

  //  onClick={(takeEvent) => {
  //                 imageClickHandler(takeEvent);
  //                 handleClick(idx);
  //               }}
  // console.log(props.id);
  return (
    <button
      className={`${styles.itemButton} ${
        props.category === props.value ? styles.active : ""
      }`}
      onClick={(takeEvent) => {
        props.show ? modalHandler(props) : clickHandler(takeEvent);
        buttonActive(props.id);
      }}
      value={props.value}
      // id={props.id}
    >
      {props.children}
    </button>
  );
};
export default Button;
