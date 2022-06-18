import { HashRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
import adminCreateUser from "./Pages/admin/adminCreateUser";
import AdminGestionPicture from "./Pages/admin/adminGestionPicture";
import Jeu2 from "./Pages/jeu2";
import AdminAddEmail from "./Pages/admin/adminAddEmail";
import { getStatusEmail } from "./firebase";
import AdminExportData from "./Pages/admin/adminExportData";

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    getStatusEmail(localStorage.getItem("email")).then((results) => {
      if (results !== undefined) {
        setStatus(results[0]);
      } else {
        setStatus("not connected");
      }
    });
  }, []);
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
            {status && status.status === "vérifié" && (
              <>
                <div className="container mt-3">
                  <Switch>
                    <Route path="/admin/export" component={AdminExportData} />
                    <Route path="/admin/emails" component={AdminAddEmail} />
                    <Route path="/admin/users" component={adminCreateUser} />
                    <Route
                      path="/admin/pictures"
                      component={AdminGestionPicture}
                    />
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
              </>
            )}
            {status && status === "not connected" && (
              <h4>
                Vous n'êtes pas connecté. C'est un site familial, inutile de
                vous connecter pour rien.
              </h4>
            )}
            {status &&
              status !== "not connected" &&
              status.status !== "vérifié" && (
                <h4>
                  Votre adresse mail est en cours de vérification. Prévenez
                  votre administrateur
                </h4>
              )}
          </main>
        </HashRouter>
      </UserProvider>
    </div>
  );
}

export default App;
