import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Data from "../JSON/info-cards.json";

import styles from "./CentralCard.module.css";
import Button from "./Button";
const CentralCard = () => {
  const [category, setCategory] = useState("Tutte");

  const clickHandler = (category) => {
    setCategory(category);
  };

  let finalCards;

  const pathCards = Data.data["info-cards"];
  const cardFiltrate = pathCards.filter(
    (card) => card.category.name === category
  );

  if (category === "Tutte") {
    finalCards = pathCards;
  } else {
    finalCards = cardFiltrate;
  }

  /*const pulito = [
    ...new Set(pathCards.map((category) => category.category.name)),
  ];

  const pulito2 = [
    ...new Set(pathCards.map((category) => category.category.icon)),
  ];

  const oggettoPulito = pulito.map((item) => {
    return { name: item };
  });

  const oggettoPulito2 = pulito2.map((item) => {
    return { icon: item };
  });

  const ennesimaProva = [];

  for (let i = 0; i < oggettoPulito.length; i++) {
    ennesimaProva.push({
      ...oggettoPulito[i],
      ...oggettoPulito2[i],
    });
  }

  console.log(ennesimaProva);
*/
  const obCategory = pathCards.map((results) => ({
    id: results.category.id,
    text: results.category.name,
    icon: results.category.icon,
  }));

  const obButton = Array.from(new Set(obCategory.map((a) => a.id))).map(
    (id) => {
      return obCategory.find((a) => a.id === id);
    }
  );

  return (
    <div className={styles.cardContainer}>
      <div className={styles.buttonContainer}>
        <Button value="Tutte" click={clickHandler}>
          Tutte
        </Button>
        {obButton.map((button, index) => {
          return (
            <Button key={index} click={clickHandler} value={button.text}>
              <img src={`../assets/${button.icon}.svg`} alt="" />
              {button.text}
              {console.log(obButton)}
            </Button>
          );
        })}
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.description}>
          <h2>{category}</h2>
          <img src="../assets/more.svg" />
        </div>
        <div className={styles.overflow}>
          {finalCards.map((card) => {
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
