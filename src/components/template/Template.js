import styles from "./Template.module.css";
/* import image from "../assets/add.svg"; */
import TemplateItem from "./TemplateItem";
const Template = (props) => {
  return (
    <div className={styles["template-container"]}>
      <div className={styles["template-header"]}>
        <h2>Template</h2>
        <p>
          Seleziona la risorsa che vuoi aggiuingere oppure crea tu un template
          da aggiungere alle informazioni del profilo
        </p>
      </div>
      <div className={styles["template-search"]}>
        <img src="../assets/search.svg"></img>
        <input type="search" placeholder="Ricerca template" />
      </div>
      <div className={styles.templateItemContainer}>
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
        <TemplateItem
          onClick={props.onModalShow}
          image="add"
          text="Aggiungi Template"
        />
      </div>
    </div>
  );
};

export default Template;
