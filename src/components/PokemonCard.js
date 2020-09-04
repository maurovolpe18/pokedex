import React from "react";
import { handleColor } from "../helpers/types";
import { Link } from "react-router-dom";

export const PokemonCard = (data) => {
  return (
    <div className="card__container">
      <div className="card__pokemon">
        <img
          src={data.data.sprites.front_default}
          alt={data.name}
          className="card__img"
        />
        <p className="card__name">{data.data.name}</p>

        <div className="card__types">
          {data.data.types.map((item) => (
            <p
              key={item.type.name}
              style={{
                background: handleColor(item.type.name),
              }}
              className="card__type-item"
            >
              {item.type.name}
            </p>
          ))}
        </div>
        <Link to={`./${data.data.name}`} data={data}>
          <p className="card__info">info</p>
        </Link>
      </div>
    </div>
  );
};
