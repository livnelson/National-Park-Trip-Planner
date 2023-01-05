import { useState, useEffect } from "react";
import UserTrips from './UserTrips'
// import CreateTrip from './CreateTrip'
import NattyParks from "./NattyParks";

function Home({ user }) {
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch("https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=20&sort=&api_key=ejj9Xj8WF8yyAFJIN0Ev3IL3cZrsbkT6CCg0JJ5s")
      .then((r) => r.json())
      .then((parksArray) => {
        console.log(parksArray.data);
        setParks(parksArray.data)
      });
  }, []);

  return (
    <div className='home-page'>
      <h1 className='greeting'>Welcome, {user.first_name}!</h1>
      <br />
      <h3 className='subheading'>Your Saved Trips</h3>
      <UserTrips user={user} />
      <br />
      <h3 className='subheading'>Browse through Popular National Park Locations</h3>
      <NattyParks parks={parks} />
      {/* <CreateTrip user={user} /> */}

    </div>
  );
}

export default Home;