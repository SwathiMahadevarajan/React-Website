import { useState } from "react";

function Name({ name, onNameChange }) {
  return (
    <div>
      <label>Name:</label>
      <input value={name} onChange={onNameChange} />
    </div>
  );
}
function FavouriteAnimal() {
  const [animal, setAnimal] = useState("");
  return (
    <div>
      <label>Favorite Animal:</label>
      <input
        value={animal}
        onChange={(event) => setAnimal(event.target.value)}
      />
    </div>
  );
}
function Display({ name }) {
  return <div>{`Hey ${name},it's nice meeting you!!`}</div>;
}
export default function TwentyFour() {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <Name
          name={name}
          onNameChange={(event) => setName(event.target.value)}
        />
        <FavouriteAnimal />
        <Display name={name} />
      </form>
    </div>
  );
}
