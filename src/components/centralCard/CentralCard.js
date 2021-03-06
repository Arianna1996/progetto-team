import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Data from "../JSON/info-cards.json";
import DropDown from "./DropDown";

import styles from "./CentralCard.module.css";
import Button from "./Button";

import _ from "lodash";

const CentralCard = (props) => {
  const [category, setCategory] = useState("Tutte");
  const [show, setShow] = useState(false);

  const DropDownHandler = () => {
    setShow(!show);
  };

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

  /* SCUSA ARI MA COSI HO ELIMINATO 2 MAP E MI SEMBRA MOLTO PIU SEMPLICE DA CAPIRE
  
  const obButton = Array.from(new Set(obCategory.map((a) => a.id))).map(
    (id) => {
      return obCategory.find((a) => a.id === id);                                 
    }
  ); */

  const buttonMadeByUniqBy = _.uniqBy(obCategory, "text");
  buttonMadeByUniqBy.unshift({
    id: 0,
    text: "Tutte",
    icon: "",
  });

  return (
    <div className={styles.cardContainer}>
      <div className={styles.buttonContainer}>
        {buttonMadeByUniqBy.map((button, index) => {
          return (
            <Button
              key={index}
              click={clickHandler}
              value={button.text}
              category={category}
              id={index}
            >
              {console.log(index)}
              <img src={`../assets/${button.icon}.svg`} alt="" />
              {button.text}
            </Button>
          );
        })}
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.bar}>
          <div className={styles.description}>
            <h2>{category}</h2>
            <img
              onClick={DropDownHandler}
              src={`../assets/${show ? "close-outline" : "more"}.svg`}
            />
            <DropDown show={show} />
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
    </div>
  );
};
export default CentralCard;
