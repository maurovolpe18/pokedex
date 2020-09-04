import React from "react";
import { NavLink } from "react-router-dom";
import { SearchScreen } from "./search/SearchScreen";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__container contenedor">
          <NavLink to="/" className="title">
            Pokedex
          </NavLink>
          <SearchScreen />
        </div>
      </nav>
    </>
  );
};
