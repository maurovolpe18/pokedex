import React from "react";
import { useFetch } from "../hooks/useFetch";
import { PokemonCard } from "./PokemonCard";
import { Loading } from "./Loading";

export const PokemonList = (item) => {
  const { loading, data } = useFetch(item.url);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={`cards__list ${data.types[0].type.name}`}>
          <PokemonCard data={data} />
        </div>
      )}
    </>
  );
};
