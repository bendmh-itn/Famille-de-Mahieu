import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './Components/navBar';
import UserProvider from './Components/Providers/UserProvider';
import SignIn from './Components/SignIn';
import HomePage from './Pages/deMahieu-dessain';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <HashRouter>
        <NavBar />
        <main>
          <Switch>

              <Route path="/:generation/:numberFamilly" component={HomePage} />

              <Route path="/" component={HomePage} />

          </Switch>
        </main>
      </HashRouter>
      </UserProvider>
    </div>
  );
}

export default App;
