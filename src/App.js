import './App.css';
import NavBar from './Components/navBar'
import PatrickdeMahieu from './Pages/deMahieu-deVinck'
import { HashRouter, Switch, Route } from "react-router-dom"
import JBdeMahieu from './Pages/deMahieu-Doat'
import PierredeMahieu from './Pages/deMahieu-Tock'
import BenoitdeMahieu from './Pages/deMahieu-D\'herde'
import ASdeMahieu from './Pages/deMahieu-Aerts'
import FrancoisdeMahieu from './Pages/deMahieu-HenryDeFrahan'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <h1>Famille de Mahieu</h1>
        <Switch>
            <Route path="/deMahieu-Doat" component={JBdeMahieu} />
            <Route path="/deMahieu-Henry de Frahan" component={FrancoisdeMahieu} />
            <Route path="/de Mahieu - Aerts" component={ASdeMahieu} />
            <Route path="/deMahieu-D'herde" component={BenoitdeMahieu} />
            <Route path="/deMahieu-Tock" component={PierredeMahieu} />
            <Route path="/deMahieu-deVinck" component={PatrickdeMahieu} />
        </Switch>
        <PatrickdeMahieu />

      </HashRouter>
    </div>
  );
}

export default App;
