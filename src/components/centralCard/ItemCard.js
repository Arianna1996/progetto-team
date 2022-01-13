import styles from "./ItemCard.module.css";

const ItemCard = (props) => {
  return (
    <div className={styles.card} style={{ backgroundColor: props.color }}>
      <div className={styles.cardItem}>
        <img src={`/assets/${props.icon}.svg`} />
        <p>{props.category}</p>
      </div>
      <div className={styles.mainItem}>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default ItemCard;
