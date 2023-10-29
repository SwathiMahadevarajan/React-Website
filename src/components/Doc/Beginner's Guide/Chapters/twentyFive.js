import { useState, useEffect } from "react";

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    fetchPokemon(pokemonName).then((pokemonData) => {
      setPokemon(pokemonData);
    });
  }, [pokemonName]);

  if (!pokemonName) {
    return "Submit a pokemon";
  }

  if (!pokemon) {
    return "...";
  }

  return <pre>{JSON.stringify(pokemon, null, 2)}</pre>;
}

function fetchPokemon(name) {
  const pokemonQuery = `
      query PokemonInfo($name: String) {
        pokemon(name: $name) {
          id
          number
          name
          attacks {
            special {
              name
              type
              damage
            }
          }
        }
      }
    `;

  return fetch("https://graphql-pokemon.now.sh", {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      query: pokemonQuery,
      variables: { name },
    }),
  })
    .then((r) => r.json())
    .then((response) => response.data.pokemon);
}

export default function TwentyFive() {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setPokemonName(event.target.elements.pokemonName.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName">Pokemon Name</label>
        <div>
          <input id="pokemonName" />
          <button type="submit">Submit</button>
        </div>
      </form>
      <hr />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
}
