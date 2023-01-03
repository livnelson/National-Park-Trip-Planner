import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import CreateUser from './CreateUser'
import Home from './Home'
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/CreateUser">
          <CreateUser />
        </Route>
        <Route path={`/users/${user.id}`}>
          <Navbar user={user} setIsLoggedIn={setIsLoggedIn} />
          <Home user={user} isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;