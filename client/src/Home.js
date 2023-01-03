import { useState, useEffect } from "react";
import UserTrips from './UserTrips'
import CreateTrip from './CreateTrip'
import Navbar from "./Navbar";
import {useHistory} from 'react-router-dom'

function Home({ user, setIsLoggedIn }) {
  const [parks, setParks] = useState([])
  const history = useHistory()
  
  useEffect(() => {
    fetch("https://developer.nps.gov/api/v1/parks?limit=20&api_key=ejj9Xj8WF8yyAFJIN0Ev3IL3cZrsbkT6CCg0JJ5s")
      .then((r) => r.json())
      .then((parksArray) => {
        console.log(parksArray);
        setParks(parksArray)
      });
  }, []);



  useEffect(() => {
    console.log(user)
  })

  return (
    <div>
      {/* <Navbar history={history} user={user}  setIsLoggedIn={setIsLoggedIn} /> */}
    <div className='home-page'>
      <h1 className='greeting'>Welcome, {user.first_name}!</h1>
      <br />
      <h3 className='subheading'>Your Saved Trips</h3>
      <UserTrips user={user} />
      <br />
      <h3 className='subheading'>Plan a Visit</h3>
      <CreateTrip user={user} />
    </div>
    </div>
  );
}

export default Home;