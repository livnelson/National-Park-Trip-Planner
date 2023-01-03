import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import CreateUser from './CreateUser'
import Home from './Home'
import Navbar from "./Navbar";
import ViewTrip from "./ViewTrip"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setIsLoggedIn(true)
          setUser(user)});
      }
    });
  }, []);

  if (isLoggedIn){
    return (
      <>
      <Navbar setIsLoggedIn={setIsLoggedIn} user={user}/>
      <Switch>
        <Route path={`/users/${user.id}`} render={routeProps => 
       <Home setIsLoggedIn={setIsLoggedIn} user={user} isLoggedIn={isLoggedIn} {...routeProps}/> } >

        </Route>
        <Route path="/ViewTrip">
          <ViewTrip/>
        </Route>

      </Switch>
      </>
    )}else {
      return (
        <Switch>
        <Route render={routeprops =>  <Login setIsLoggedIn={setIsLoggedIn} {...routeprops}/>} exact path="/">
          {/* <Login setIsLoggedIn={setIsLoggedIn} /> */}
        </Route>
        <Route path="/CreateUser">
          <CreateUser/>
        </Route>

        </Switch>
      )
    }
}

export default App;