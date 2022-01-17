import styles from "./Sidebar.module.css";
import React, { useState } from "react";

const Sidebar = (props) => {
  const [index, setIndex] = useState(1);

  const handleClick = (i) => {
    setIndex(i);
  };

  let filteredColor =
    "brightness(0) saturate(100%) invert(24%) sepia(94%) saturate(1775%) hue-rotate(185deg) brightness(100%) contrast(102%)";

  const imageClickHandler = (event) => {
    let takeEvent = event.target.id;
    props.onIconClick(takeEvent);
    // setActive(index);
    console.log(event);
  };

  // const indexHandler = (index) => {
  //   setActive(index);
  // };

  const arrayImg = [
    "speedometer",
    "documents",
    "diary",
    "focus",
    "calendar",
    "chevron-left-solid",
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles["first-item"]}>
        <img src="../assets/avatar.svg" />
        <p>Operatore</p>
      </div>
      <div className={styles["second-item"]}>
        {arrayImg.map((img, idx) => {
          return (
            <img
              key={idx}
              src={`../assets/${img}.svg`}
              id={img}
              // onClick={imageClickHandler}
              onClick={(takeEvent) => {
                imageClickHandler(takeEvent);
                handleClick(idx);
              }}
              style={{
                filter: idx === index ? filteredColor : "none",
              }}
            />
          );
        })}
      </div>
      <div className={styles["third-item"]}>
        <img src="../assets/question.png" />
      </div>
    </div>
  );
};
export default Sidebar;
