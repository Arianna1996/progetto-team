import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Data from "../JSON/info-cards.json";

import styles from "./CentralCard.module.css";
import Button from "./Button";
const CentralCard = () => {
  const [category, setCategory] = useState("Tutte");

  /* console.log(cardFiltrate); */
  const clickHandler = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const pathCards = Data.data["info-cards"];
  const cardFiltrate = pathCards.filter(
    (card) => card.category.name === category
  );

  const pulito = [
    ...new Set(pathCards.map((category) => category.category.name)),
  ];
  console.log(pulito);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.buttonContainer}>
        {pathCards.map((button, index) => {
          return (
            <Button key={index}>
              <img src={`../assets/${button.category.icon}.svg`} />
              {button.category.name}
            </Button>
          );
        })}
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.description}>
          <h2>Tutte</h2>
          <img src="../assets/more.svg" />
        </div>
        <div className={styles.overflow}>
          {category === "Tutte"
            ? pathCards.map((card) => {
                return (
                  <ItemCard
                    key={card.id}
                    name={card.name}
                    color={card.category.colour}
                    icon={card.category.icon}
                    category={card.category.name}
                  />
                );
              })
            : cardFiltrate.map((card) => {
                return (
                  <ItemCard
                    key={card.id}
                    name={card.name}
                    color={card.category.colour}
                    icon={card.category.icon}
                    category={card.category.name}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default CentralCard;
