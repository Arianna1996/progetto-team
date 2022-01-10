import styles from "./Sidebar.module.css";
//import userimg from "../assets/avatar.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles["first-item"]}>
        <img src="../assets/avatar.svg" />
        <p>Operatore</p>
      </div>
      <div className={styles["second-item"]}>
        <img src="../assets/speedometer.svg" />
        <img src="../assets/documents.svg" />
        <img src="../assets/diary.svg" />
        <img src="../assets/focus.svg" />
        <img src="../assets/calendar.svg" />
        <img
          className={styles.arrow}
          src="../assets/chevron-left-solid.svg"
        ></img>
      </div>
      <div className={styles["third-item"]}>
        <img src="../assets/question.png" />
      </div>
    </div>
  );
};
export default Sidebar;
