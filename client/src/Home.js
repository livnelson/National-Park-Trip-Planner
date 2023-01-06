import { useState, useEffect } from "react";
import UserTrips from './UserTrips'
// import CreateTrip from './CreateTrip'
import NattyParks from "./NattyParks";

function Home({ user }) {
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch("https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=50&api_key=hQLUJV4Ctu79CYYc4YTuslyjKz36u5520OCQlXnF")
      .then((r) => r.json())
      .then((parksArray) => {
        console.log(parksArray.data);
        setParks(parksArray.data)
      });
  }, []);

  let checkedActivities = []


  return (
    <div className='home-page'>
      <h1 className='greeting'>Welcome, {user.first_name}!</h1>
      <br />
      <h3 className='subheading'>Your Saved Trips</h3>
      <UserTrips user={user} parks={parks} checkedActivities={checkedActivities}/>
      <br />
      <h3 className='subheading'>California National Park Locations</h3>
      <p id="click-details">｛ <em>Click Park Name for Details</em> ｝</p>
      <NattyParks parks={parks} user={user}/>
    </div>
  );
}

export default Home;