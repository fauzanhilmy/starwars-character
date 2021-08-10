import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Films from "./pages/films.jsx";
import Detail from "./pages/details.jsx";
import Favorites from "./pages/favorite.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="container row mx-auto">
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
  );
}

export default App;
