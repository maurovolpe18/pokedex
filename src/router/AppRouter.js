import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { PokedexScreen } from "../components/PokedexScreen";
import { PokemonScreen } from "../components/PokemonScreen";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/:pokemonNombre" component={PokemonScreen}></Route>
        </Switch>

        <Switch>
          <Route exact path="/" component={PokedexScreen}>
            <PokedexScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
