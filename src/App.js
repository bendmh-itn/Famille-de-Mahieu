import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/navBar/navBar";
import UserProvider from "./Components/Providers/UserProvider";
import HomePage from "./Pages/deMahieu-dessain";
import AnniversairePage from "./Pages/anniversaire";
import Generation2 from "./Pages/generation2";
import Generation3 from "./Pages/generation3";
import Generation4 from "./Pages/generation4";
import Jeu from "./Pages/jeu";
import Profil from "./Pages/profilUser";
import NavBarMobile from "./Components/navBar/navBarMobile";
import ListeEvenements from "./Pages/listeEvenements";
import BarreAjoutEmail from "./Components/barreAjoutEmail";
import BarreSeConnecter from "./Components/barreSeConnecter";
import adminCreateUser from "./Pages/admin/adminCreateUser";
import AdminGestionPicture from "./Pages/admin/adminGestionPicture";
import Jeu2 from "./Pages/jeu2";

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
            <BarreAjoutEmail />
            <BarreSeConnecter />
            <div className="container mt-3">
              <Switch>
                <Route path="/admin/users" component={adminCreateUser} />
                <Route path="/admin/pictures" component={AdminGestionPicture} />
                <Route
                  path="/arbre/:generation/:numberFamilly"
                  component={HomePage}
                />
                <Route path="/generation4" component={Generation4} />
                <Route path="/generation3" component={Generation3} />
                <Route path="/generation2" component={Generation2} />
                <Route path="/anniversaire" component={AnniversairePage} />
                <Route path="/jeu2" component={Jeu2} />
                <Route path="/jeu" component={Jeu} />
                <Route path="/profil" component={Profil} />
                <Route path="/arbre" component={HomePage} />
                <Route path="/event/:id" component={ListeEvenements} />
                <Route path="/" component={ListeEvenements} />
              </Switch>
            </div>
          </main>
        </HashRouter>
      </UserProvider>
    </div>
  );
}

export default App;
