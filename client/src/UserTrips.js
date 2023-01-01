import React from 'react'

function UserTrips({ trip }) {
  return (
    <div>
        <h1>Trip: {trip.destination}</h1>
    </div>
  )
}

export default UserTrips