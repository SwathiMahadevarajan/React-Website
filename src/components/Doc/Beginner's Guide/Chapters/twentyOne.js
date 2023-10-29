import { useState } from "react";

export default function TwentyOne() {
  const [userName, setUserName] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); //To avoid Full page refresh
    alert(`You entered: ${userName}`);
  }

  function handleChange(event) {
    setUserName(event.target.value.toLowerCase());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input
            id="usernameInput"
            type="text"
            onChange={handleChange}
            value={userName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
