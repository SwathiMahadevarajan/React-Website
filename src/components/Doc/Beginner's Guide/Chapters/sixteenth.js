import React, { useState } from "react";
function useLocalStorage(key, defaultValue = "") {
  const [state, setState] = useState(
    window.localStorage.getItem(key) || defaultValue
  );

  React.useEffect(() => {
    console.log("Called only when name value changes");
    window.localStorage.setItem(key, defaultValue);
  }, [key, defaultValue]);
  return [state, setState];
}

function Greeting() {
  const [name, setName] = useLocalStorage();
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
export default function Sixteenth() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Greeting />
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
}
