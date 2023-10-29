import ReactDOM from "react-dom";

export default function Ninth() {
  const rootElement = document.getElementById("root");

  function tick() {
    const time = new Date().toLocaleTimeString();
    const element = (
      <div>
        <input value={time} />
        <input value={time} />
      </div>
    );
    // ReactDOM.render(element,rootElement)
  }
  setInterval(tick, 1000);
  return <></>;
}
