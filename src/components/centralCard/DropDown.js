import styles from "./DropDown.module.css";
import React, { useState } from "react";
const DropDown = (props) => {
  return (
    <div
      className={styles.dropdown}
      style={{ display: props.show ? "block" : "none" }}
    >
      <ul className={styles["list-container"]}>
        <li>
          Modifica <img src="../assets/cog-outline.svg" />
        </li>
        <li>
          Cancella <img src="../assets/trash-outline.svg" />
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
