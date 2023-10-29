import React, { useState, useEffect } from "react";

function Greeting() {
  const [name, setName] = useState(window.localStorage.getItem("name") || "");

  useEffect(() => {
    console.log("Called only when name value changes");
    window.localStorage.setItem("name", name);
  }, []);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name"> Name:</label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}
export default function Fifteenth() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Greeting />
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
}
