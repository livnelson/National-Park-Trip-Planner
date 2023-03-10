import React from 'react'
import Park from './Park'


export default function NattyParks({ parks, user }) {

    // console.log(parks)
    // console.log(filteredParks)

    const mappedParks = parks.map((park) => {
        //console.log("Name: " + park.fullName)
        //console.log(park.activities.name)
        return <Park
            key={park.id}
            id={park.id}
            fullname={park.fullName}
            activities={park.activities}
            images={park.images}
            addresses={park.addresses}
            description={park.description}
            directionsUrl={park.directionsUrl}
            user={user}
        />
    })

    console.log(mappedParks)

    return (
        <div>
            {mappedParks}
            <br />
        </div>
    )
}