import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import Home from './Home'
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  // const [showUser, setShowUser] = useState(false);

  // function handleUser() {
  //   setShowUser(!showUser);
  // }

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      {/* <Navbar setIsLoggedIn={setIsLoggedIn} /> */}
      <Switch>
        <Route exact path="/">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path={`/users/${user.id}`}>
          <Navbar user={user} setIsLoggedIn={setIsLoggedIn} />
          <Home user={user} isLoggedIn={isLoggedIn} />
          {/* <Home user={user} handleUser={handleUser} showUser={showUser} isLoggedIn={isLoggedIn} /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;