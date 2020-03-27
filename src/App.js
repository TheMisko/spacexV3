import React from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Launches from "./pages/launches";
import "./App.css";
import Test from "./components/test";
import LauncDetails from "./pages/launchDetails";
import LaunchDetailsV2 from "./pages/launchDetailsv2";
import News from "./pages/news";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/launchDetails/:mission_id"
            component={LauncDetails}
          />
          <Route exact path="/launchDetailsV2" component={LaunchDetailsV2} />
          <Route exact path="/launches" component={Launches} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/news" component={News} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
