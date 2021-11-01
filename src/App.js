import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/navBar";
import UserProvider from "./Components/Providers/UserProvider";
import HomePage from "./Pages/deMahieu-dessain";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route path="/:generation/:numberFamilly" component={HomePage} />

              <Route path="/" component={HomePage} />
            </Switch>
          </main>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
