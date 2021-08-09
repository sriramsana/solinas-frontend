import "./App.css";
import { Route, Switch } from "react-router-dom";

import Mainpage from "./Components/Mainpage";
import Diameter from "./Components/Diameter";
import Pressures from "./Components/Pressures";
import All from "./Components/All";
import Temperatures from "./Components/Temperatures";

import Corision from "./Components/Corision";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/all" component={All} />
        <Route exact path="/diameter" component={Diameter} />
        <Route exact path="/pressure" component={Pressures} />
        <Route exact path="/temperatures" component={Temperatures} />
        <Route exact path="/corision" component={Corision} />
      </Switch>
    </div>
  );
}

export default App;
