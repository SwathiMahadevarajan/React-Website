import { useState } from "react";

export default function TwentyThree() {
  const allItems = [
    { id: "a", value: "apple" },
    { id: "o", value: "orange" },
    { id: "g", value: "grape" },
    { id: "p", value: "pear" },
  ];

  const [items, setItems] = useState(allItems);

  function addItem() {
    setItems([...items, allItems.find((i) => !items.includes(i))]);
  }

  function removeItem(item) {
    setItems(items.filter((i) => i !== item));
  }

  return (
    <div>
      <br />
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{" "}
            <label htmlFor={`${item.value}-input`}>{item.value}</label>{" "}
            <input id={`${item.value}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}
