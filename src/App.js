import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import MintPage from "./pages/MintPage";
import DiscoverPage from "./pages/DiscoverPage";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/mint" component={MintPage} />
        <Route path="/discover" component={DiscoverPage} />
        <Route path="/resources" component={ResourcesPage} />
      </Switch>
    </Router>
  );
}

export default App;
