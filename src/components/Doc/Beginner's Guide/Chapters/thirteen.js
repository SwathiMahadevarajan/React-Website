import React, { useState } from "react";

export default function Thirteen() {
  const [name, setName] = useState(window.localStorage.getItem("name") || "");

  React.useEffect(() => {
    window.localStorage.setItem("name", name);
  });

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
