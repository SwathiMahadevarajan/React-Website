import { useRef, useState } from "react";

export default function Twenty() {
  const [userName, setUserName] = useState("");
  const isLowerCase = userName === userName.toLowerCase();
  const error = isLowerCase ? null : "Username has to be in lowercase ";

  function handleSubmit(event) {
    event.preventDefault(); //To avoid Full page refresh
    alert(`You entered: ${userName}`);
  }

  function handleChange(event) {
    setUserName(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input id="usernameInput" type="text" onChange={handleChange} />
        </div>
        <div style={{ color: "red" }}>{error}</div>
        <button disabled={Boolean(error)} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
