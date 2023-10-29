import { useRef } from "react";

export default function Nineteenth() {
  //const userName = useRef();
  function handleSubmit(event) {
    event.preventDefault(); //To avoid Full page refresh
    const username = event.target.elements.usernameInput.value;
    //const username = userName.current.value;  --->refs can be used for accesing DOM values
    alert(`You entered: ${username}`);
  }

  return (
    <>
      {/*  onSubmit trigerred if submit button/enter is clicked */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          {/* <input ref={userName} id="usernameInput" type="text" /> */}
          <input id="usernameInput" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
