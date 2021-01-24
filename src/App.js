import './App.css';
import NavBar from './Components/navBar'
import PatrickdeMahieu from './Pages/deMahieu-deVinck'
import { HashRouter, Switch, Route } from "react-router-dom"
import JBdeMahieu from './Pages/deMahieu-Doat'
import PierredeMahieu from './Pages/deMahieu-Tock'
import BenoitdeMahieu from './Pages/deMahieu-D\'herde'
import ASdeMahieu from './Pages/deMahieu-Aerts'
import FrancoisdeMahieu from './Pages/deMahieu-HenryDeFrahan'
import XavierRolin from './Pages/Rolin-Haverals'
import ChristopheRolin from './Pages/Rolin-Okako'
import NicolasRolin from './Pages/RolinNicolas'
import SebastienRolin from './Pages/RolinSebastien'
import GuyRolin from './Pages/Rolin-deMahieu'
import HomePage from './Pages/HomePage';
import CarolinedeMahieu from './Pages/Desmet-deMahieu'
import CharlottedeMahieu from './Pages/deTroyer'
import ValentinedeMahieu from './Pages/del Marmol-deMahieu'
import MigueldeMahieu from './Pages/de Mahieu-Vandermeersch'
import MatthieuvanDelft from './Pages/vanDelf'
import MagalivanDelft from './Pages/BOUDOUL-vanDELFT'
import BaudouinvanDelft from "./Pages/van Delft-deMahieu";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <main>
          <h1>Famille de Mahieu</h1>
          <Switch>
              {/*Famille Miguel de Mahieu */}
              <Route path="/Desmet - de Mahieu" component={CarolinedeMahieu} />
              <Route path="/de Troyer" component={CharlottedeMahieu} />
              <Route path="/del Marmol - de Mahieu" component={ValentinedeMahieu} />
              <Route path="/de Mahieu - Vandermeersch" component={MigueldeMahieu} />

              {/*Famille Baudouin van Delft */}
              <Route path="/van Delft" component={MatthieuvanDelft} />
              <Route path="/BOUDOUL - van DELFT" component={MagalivanDelft} />
              <Route path="/van Delft - de Mahieu" component={BaudouinvanDelft} />



              {/*Famille Guy Rolin */}
              <Route path="/Rolin - Haverhals" component={XavierRolin} />
              <Route path="/Rolin - Okako" component={ChristopheRolin} />
              <Route path="/RolinNicolas" component={NicolasRolin} />
              <Route path="/Rolin - de Mahieu" component={GuyRolin} />
              <Route path="/Rolin - Depret" component={SebastienRolin} />

              {/*Famille Patrick de Mahieu */}
              <Route path="/deMahieu-Doat" component={JBdeMahieu} />
              <Route path="/deMahieu-Henry de Frahan" component={FrancoisdeMahieu} />
              <Route path="/de Mahieu - Aerts" component={ASdeMahieu} />
              <Route path="/deMahieu-D'herde" component={BenoitdeMahieu} />
              <Route path="/deMahieu-Tock" component={PierredeMahieu} />
              <Route path="/deMahieu-deVinck" component={PatrickdeMahieu} />


              <Route path="/" component={HomePage} />

          </Switch>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
