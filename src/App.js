import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/navBar";
import UserProvider from "./Components/Providers/UserProvider";
import HomePage from "./Pages/deMahieu-dessain";
import AnniversairePage from "./Pages/anniversaire";
import Generation3 from "./Pages/generation3";
import Generation4 from "./Pages/generation4";
import Jeu from "./Pages/jeu";
import Profil from "./Pages/profilUser";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <HashRouter>
          <NavBar />
          <main>
            <div className="container mt-3">
              <Switch>
                <Route
                  path="/:generation/:numberFamilly"
                  component={HomePage}
                />
                <Route path="/generation4" component={Generation4} />
                <Route path="/generation3" component={Generation3} />
                <Route path="/anniversaire" component={AnniversairePage} />
                <Route path="/jeu" component={Jeu} />
                <Route path="/profil" component={Profil} />
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
          </main>
        </HashRouter>
      </UserProvider>
    </div>
  );
}

export default App;
