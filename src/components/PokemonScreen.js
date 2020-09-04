import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { handleColor } from "../helpers/types";
import { Loading } from "./Loading";

export const PokemonScreen = () => {
  const { pokemonNombre } = useParams();
  console.log(pokemonNombre);

  const { loading, data } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={`container pokemon__container ${data.types[0].type.name}`}
        >
          <div className="pokemon__info">
            <p className="pokemon__name">{data.name}</p>
            <img
              src={data.sprites.other.dream_world.front_default}
              alt={data.name}
            />
          </div>
          <div className="pokemon__types">
            {data.types.map((item) => (
              <p
                key={item.type.name}
                style={{
                  background: handleColor(item.type.name),
                }}
                className="pokemon__type-item"
              >
                {item.type.name}
              </p>
            ))}
          </div>
          <div className="pokemon__stats">
            {data.stats.map((stat) => (
              <div className="pokemon__stat container">
                <p className="pokemon__stats-name"> {stat.stat.name}: </p>
                <div
                  style={{
                    background: "grey",
                    width: "100%",
                    border: "1px solid black",
                    marginBottom: "1rem",
                    height: "1.8rem",
                  }}
                >
                  <li
                    style={{
                      background: handleColor(`${data.types[0].type.name}`),
                      width: `${stat.base_stat}%`,
                      maxWidth: "100%",
                      border: "1px solid black",
                      display: "flex",
                      height: "1.7rem",
                    }}
                  >
                    <p className="pokemon__stat-number">{stat.base_stat}</p>
                  </li>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
