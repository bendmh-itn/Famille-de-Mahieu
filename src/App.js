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
import HomePage from './Pages/deMahieu-dessain'
import CarolinedeMahieu from './Pages/Desmet-deMahieu'
import CharlottedeMahieu from './Pages/deTroyer'
import ValentinedeMahieu from './Pages/del Marmol-deMahieu'
import MigueldeMahieu from './Pages/de Mahieu-Vandermeersch'
import MatthieuvanDelft from './Pages/vanDelf'
import MagalivanDelft from './Pages/BOUDOUL-vanDELFT'
import BaudouinvanDelft from './Pages/van Delft-deMahieu'
import DidierDeFauconval from './Pages/deBernardDeFauconval-deMahieu'
import GauthierDeFauconval from './Pages/deFauconval-leblick'
import GeraldineDeFauconval from './Pages/Blave-deFauconval'
import StephanieDeFauconval from './Pages/deFauconval-Leonardo'
import CarineDeMahieu from './Pages/Legast-deMahieu'
import generation4 from './Pages/generation4'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <main>
          <Switch>
              {/*Famille Miguel de Mahieu */}
              <Route path="/Desmet - de Mahieu" component={CarolinedeMahieu} />
              <Route path="/de Troyer" component={CharlottedeMahieu} />
              <Route path="/del Marmol - de Mahieu" component={ValentinedeMahieu} />
              <Route path="/de Mahieu - Vandermeersch" component={MigueldeMahieu} />


              {/*Famille Baudouin van Delft */}
              <Route path="/van Delft" component={MatthieuvanDelft} />
              <Route path="/BOUDOUL - van DELFT" component={MagalivanDelft} />
              <Route path="/ van Delft  de Mahieu " component={BaudouinvanDelft} />

              {/*Famille Carine de Mahieu */}
              <Route path="/Legast - de Mahieu" component={CarineDeMahieu} />


              
               {/*Famille de Bernard de Fauconval - de Mahieu */}
              <Route path="/de Bernard de Fauconval - de Mahieu" component={DidierDeFauconval} />
              <Route path="/de Fauconval-Leblicq " component={GauthierDeFauconval} />
              <Route path="/Blave-deFauconval" component={GeraldineDeFauconval} />
              <Route path="/de Fauconval - Leonardo" component={StephanieDeFauconval} />


              {/*Famille Guy Rolin */}
              <Route path="/Rolin" component={NicolasRolin} />
              <Route path="/Rolin - Haverhals" component={XavierRolin} />
              <Route path="/Rolin - Okako" component={ChristopheRolin} />
              <Route path="/Rolin - de Mahieu" component={GuyRolin} />
              <Route path="/Rolin - Depret" component={SebastienRolin} />

              {/*Famille Patrick de Mahieu */}
              <Route path="/de Mahieu - Doat" component={JBdeMahieu} />
              <Route path="/de Mahieu - henry de frahan" component={FrancoisdeMahieu} />
              <Route path="/de Mahieu - Aerts" component={ASdeMahieu} />
              <Route path="/de Mahieu - D'herde" component={BenoitdeMahieu} />
              <Route path="/de Mahieu-Tock" component={PierredeMahieu} />
              <Route path="/de Mahieu-de Vinck" component={PatrickdeMahieu} />


              <Route path="/generation 4" component={generation4} />

              <Route path="/" component={HomePage} />

          </Switch>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
