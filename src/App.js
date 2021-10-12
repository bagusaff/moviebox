import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Page Components
import Home from "./pages";
import MovieDetail from "./pages/movie";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={MovieDetail} exact />
      </Switch>
    </Router>
  );
};

export default App;
