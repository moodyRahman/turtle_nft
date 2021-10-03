import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import MoodNav from "./components/Nav";
import About from "./pages/About";
import Attributes from "./pages/Attributes";
import Home from "./pages/Home";
import Rarity from "./pages/Rarity";
import Roadmap from "./pages/Roadmap";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <Router>
      <MoodNav />
      <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/rarity">
            <Rarity />
          </Route>

          <Route path="/roadmap">
            <Roadmap />
          </Route>

          <Route path="/attributes">
            <Attributes />
          </Route>

          <Route path="/wallet">
            <Wallet />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
