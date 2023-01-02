import React, { useState, useEffect } from 'react'
import Trip from "./Trip"


function UserTrips({ user }) {

  const [trips, setTrips] = useState([])
  const { user_id } = user
  console.log(user)

  useEffect(() => {
    fetch('/alltrips', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    })
      .then(res => {
        if (res.ok) {
          res.json().then(trips => {
            console.log(trips)
            setTrips(trips)
          })
        }
      })
  }, [])

  const filteredTrips = trips.filter((trip) => {
    //console.log("user" + user)
    //console.log("user.id:" + user.id)
    if (trip.user_id === user.id) return true
  })

  const mappedTrips = filteredTrips.map((trip) => {
    //console.log(trip)
    return <Trip trip={trip} key={trip.id} />
  })

  return (
    <div className="user-card">UserTrips
      {mappedTrips}
    </div>
  )
}

export default UserTrips