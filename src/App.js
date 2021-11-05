import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/navBar";
import UserProvider from "./Components/Providers/UserProvider";
import HomePage from "./Pages/deMahieu-dessain";
import AnniversairePage from "./Pages/anniversaire";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <HashRouter>
          <NavBar />
          <main>
            <Switch>
              <Route path="/:generation/:numberFamilly" component={HomePage} />
              <Route path="/anniversaire" component={AnniversairePage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </main>
        </HashRouter>
      </UserProvider>
    </div>
  );
}

export default App;
