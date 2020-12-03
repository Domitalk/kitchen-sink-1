import React from "react";
import Homepage from "./components/Homepage.js";
import NavigationBar from "./components/NavigationBar.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/Products">

        </Route>
        <Route path="/About">

        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
