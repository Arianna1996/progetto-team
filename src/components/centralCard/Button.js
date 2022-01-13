const Button = (props) => {
  const clickHandler = (event) => {
    props.click(event.target.value);
  };

  return (
    <button onClick={clickHandler} value={props.value}>
      {props.children}
    </button>
  );
};
export default Button;
