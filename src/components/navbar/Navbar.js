import styles from "./Navbar.module.css";
import Button from "../centralCard/Button";

const Navbar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["user-info"]}>
        <div>
          <img src="../assets/avatar-header.svg" />
          <h3>Francesco Totti</h3>
        </div>

        <div>
          <button>Roma</button>
          <div className={styles.divisor}></div>
        </div>
      </div>
      <div className={styles["info-table"]}>
        <div className={styles["info-details"]}>
          <h3>Schede informazioni</h3>
          <p>Roma &gt; Profili &gt; Francesco Totti</p>
        </div>
        <div className={styles["info-notification"]}>
          <img src="../assets/notification.svg" />
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
        <img src="../assets/gear.svg" />
        <img src="../assets/lights-sun.svg" />
        <img src="../assets/power-button.svg" />
      </div>
    </div>
  );
};

export default Navbar;
