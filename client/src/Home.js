import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserTrips from './UserTrips'
import CreateTrip from './CreateTrip'
import Park from './Park'

function Home ({ user }) {
  const [parks, setParks] = useState([])
  
  // useEffect(() => {
  //   fetch("https://developer.nps.gov/api/v1/parks?api_key=ejj9Xj8WF8yyAFJIN0Ev3IL3cZrsbkT6CCg0JJ5s")
  //   .then((r) => r.json())
  //   .then((parksArray) => {
  //     console.log(parksArray);
  //     setParks(parksArray)
  //   });
  // }, []);
  
  return (
    <div className='home-page'>
      <h1 className='greeting'>Welcome, {user.first_name}!</h1>
      <br/>
      <h3 className='subheading'>Your Saved Trips</h3>
      <UserTrips />
      <br/>
      <h3 className='subheading'>Plan a Visit</h3>
      <CreateTrip parks={parks}/>
    </div>
  );
}

export default Home;