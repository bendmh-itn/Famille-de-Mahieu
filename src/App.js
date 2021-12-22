import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/navBar";
import UserProvider from "./Components/Providers/UserProvider";
import HomePage from "./Pages/deMahieu-dessain";
import AnniversairePage from "./Pages/anniversaire";
import Generation3 from "./Pages/generation3";
import Generation4 from "./Pages/generation4";
import Jeu from "./Pages/jeu";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <HashRouter>
          <NavBar />
          <main>
            <Switch>
              <Route path="/:generation/:numberFamilly" component={HomePage} />
              <Route path="/generation4" component={Generation4} />
              <Route path="/generation3" component={Generation3} />
              <Route path="/anniversaire" component={AnniversairePage} />
              <Route path="/jeu" component={Jeu} />
              <Route path="/" component={HomePage} />
            </Switch>
          </main>
        </HashRouter>
      </UserProvider>
    </div>
  );
}

export default App;
