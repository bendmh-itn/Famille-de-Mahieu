import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/navBar";
import UserProvider from "./Components/Providers/UserProvider";
import HomePage from "./Pages/deMahieu-dessain";
import AnniversairePage from "./Pages/anniversaire";
import Generation2 from "./Pages/generation2";
import Generation3 from "./Pages/generation3";
import Generation4 from "./Pages/generation4";
import Jeu from "./Pages/jeu";
import Profil from "./Pages/profilUser";
import NavBarMobile from "./Components/navBarMobile";
import ListeEvenements from "./Pages/listeEvenements";
import BarreAjoutEmail from "./Components/barreAjoutEmail";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <HashRouter>
          <div className="d-none d-sm-none d-md-block">
            <NavBar />
          </div>
          <div className="d-block d-sm-block d-md-block d-lg-none">
            <NavBarMobile />
          </div>

          <main>
            {console.log(localStorage.getItem("userId"))}
            {localStorage.getItem("userId") === null && <BarreAjoutEmail />}
            <div className="container mt-3">
              <Switch>
                <Route path="/events/:id" component={ListeEvenements} />
                <Route path="/events" component={ListeEvenements} />
                <Route
                  path="/:generation/:numberFamilly"
                  component={HomePage}
                />
                <Route path="/generation4" component={Generation4} />
                <Route path="/generation3" component={Generation3} />
                <Route path="/generation2" component={Generation2} />
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
