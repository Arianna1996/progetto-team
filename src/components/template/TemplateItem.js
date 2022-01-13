import styles from "./TemplateItem.module.css";
const TemplateItem = (props) => {
  return (
    <div className={styles["template-item"]}>
      <img src={`/assets/${props.image}.svg`} />
      <h6>{props.text}</h6>
    </div>
  );
};
export default TemplateItem;
