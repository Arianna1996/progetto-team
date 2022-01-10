import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["user-info"]}>
        <img src="../assets/avatar-header.svg"></img>
        <h3>Francesco Totti</h3>
        <div>
          <button>Roma</button>
        </div>
      </div>
      <div className={styles["info-table"]}>
        <div className={styles["info-details"]}>
          <h3>Schede informazioni</h3>
          <p>Roma &gt; Profili &gt; Francesco Totti</p>
        </div>
        <div className={styles["info-notification"]}>
          <img src="../assets/notification.svg"></img>
        </div>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Ricerca nei target" />
        <button>Cerca</button>
      </div>
      <div className={styles.hour}>
        <p>09:41</p>
      </div>
      <div className={styles.settings}>
        <img src="../assets/gear.svg"></img>
        <img src="../assets/lights-sun.svg"></img>
        <img src="../assets/power-button.svg"></img>
      </div>
    </div>
  );
};

export default Navbar;