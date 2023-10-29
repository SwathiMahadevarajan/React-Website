import ReactDOM from "react-dom/client";
import { render } from "react-dom";
export default function Eleven() {
  const rootElement = document.createElement("div");
  const state = { eventCount: 0, userName: "" };
  function AppCom() {
    function handleClick() {
      setState({ eventCount: state.eventCount + 1 });
    }
    function handleChange(event) {
      setState({ userName: event.target.value });
    }
    return (
      <div>
        <p>There have been {state.eventCount} events</p>
        <button onClick={handleClick}>Click Me</button>
        <p>You typed: {state.userName}</p>
        <input onChange={handleChange} />
      </div>
    );
  }
  function setState(newState) {
    Object.assign(state, newState);
    render(<AppCom />, rootElement);
  }
  return <></>;
}
