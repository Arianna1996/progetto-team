import ItemCard from "./ItemCard";

import styles from "./CentralCard.module.css";
const CentralCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.buttonContainer}>
        <button>Tutte</button>
        <button>
          <img src="../assets/documents.svg" />
          Documenti
        </button>
        <button>
          <img src="../assets/accounts.svg" />
          Accounts
        </button>
        <button>
          <img src="../assets/payments.svg" />
          Payments
        </button>
        <button></button>
        <button></button>
        <button></button>
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.description}>
          <h2>Tutte</h2>
          <img src="../assets/more.svg" />
        </div>
        <div className={styles.overflow}>
          <ItemCard />
        </div>
      </div>
    </div>
  );
};
export default CentralCard;
