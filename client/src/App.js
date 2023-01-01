import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import Home from './Home'

function App() {

  const [user, setUser] = useState({});
  const [showUser, setShowUser] = useState(false);

  function handleUser() {
    setShowUser(!showUser);
  }

  return (
    <div >
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path={`/users/${user.id}`}>
            <Home user={user} handleUser={handleUser} showUser={showUser} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;