import styles from "./ItemCard.module.css";

const ItemCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardItem}>
        <img src="../assets/documents.svg" />
        <p>Documento</p>
      </div>
      <div className={styles.mainItem}>
        <h3>Carta D'Identità</h3>
      </div>
    </div>
  );
};
export default ItemCard;
