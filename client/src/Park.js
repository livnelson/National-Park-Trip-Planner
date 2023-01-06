import React, { useState } from 'react'
import ParkDetails from "./ParkDetails"
import CreateTrip from './CreateTrip'

const Park = ({ id, fullname, images, activities, addresses, description, directionsUrl, user, checkedActivities }) => {
    const [viewPark, setViewPark] = useState(true)

    const toggleViewPark = () => {
        //console.log(`Park name clicked - park id: ${id}`)
        setViewPark(!viewPark)
    }

    const mappedActivities = activities.map(activity => {
        return <span>{activity.name}</span>
    })

    return (
        <div>
            <h4 onClick={toggleViewPark} className="park-name">{fullname}</h4>
            {viewPark ? null : <ParkDetails
                key={id}
                id={id}
                fullname={fullname}
                images={images}
                activities={activities}
                addresses={addresses}
                description={description}
                directionsUrl={directionsUrl}
                checkedActivities={checkedActivities}
                user={user} />}
        </div>
    )
}

export default Park
