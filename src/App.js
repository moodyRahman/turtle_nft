import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Footer from "./components/Footer";
import MoodNav from "./components/Nav";
import About from "./pages/About";
import Attributes from "./pages/Attributes";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Rarity from "./pages/Rarity";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import Wallet from "./pages/Wallet";


function App() {
  return (
    <Router>
      <MoodNav />
      <div style={{paddingTop:"100px", paddingBottom:"100px"}}>
      <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/rarity">
            <Home />
          </Route>

          <Route path="/roadmap">
            <Home />
          </Route>

          <Route path="/attributes">
            <Home />
          </Route>

          <Route path="/wallet">
            <Home />
          </Route>

          <Route path="/team">
            <Team />
          </Route>

          <Route path="/faq">
            <Faq />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
