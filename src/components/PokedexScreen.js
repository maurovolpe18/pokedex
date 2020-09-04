import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { PokemonList } from "./PokemonList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Loading } from "./Loading";

export const PokedexScreen = () => {
  const [count, setCount] = useState(0);
  const { loading, data } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${count}&limit=15`
  );

  const next = (e) => {
    e.preventDefault();
    setCount(count + 15);
  };
  const prev = (e) => {
    e.preventDefault();
    if (count <= 0) {
      return;
    } else {
      setCount(count - 15);
    }
  };

  return (
    <>
      <div className="contenedor">
        <div className="arrow__buttons">
          <button onClick={prev} className="arrow">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={next} className="arrow arrow-right">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="cards__container">
            {data.results.map((item) => (
              <PokemonList key={item.url} url={item.url} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
