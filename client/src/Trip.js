
import React from 'react'

function Trip({ trip }) {

    const { destination, startDate, endDate } = trip
    console.log("Trip check")

    return (
        <div>
            <h1>{destination}</h1>
            <p>{startDate}</p>
            <p>{endDate}</p>
        </div>
    )
}

export default Trip
