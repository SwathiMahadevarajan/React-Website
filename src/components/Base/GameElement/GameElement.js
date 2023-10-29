import "./styles.css";
const GameElement = (props) => {
  const { borderColor, icon, index, onClick = {}, clickable } = props;
  const Icon = icon;
  return (
    <button
      style={{
        borderColor: borderColor,
        cursor: clickable ? "pointer" : "default",
      }}
      className={`gameElement gameElement-${index}`}
      onClick={() => {
        if (clickable) onClick(props);
      }}
    >
      <Icon height="30px" />
    </button>
  );
};
export default GameElement;
