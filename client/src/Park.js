import React, { useState } from 'react'
import ParkDetails from "./ParkDetails"
import CreateTrip from './CreateTrip'

const Park = ({ id, fullname, images, activities, addresses, description, directionsUrl }) => {
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
            <h4 onClick={toggleViewPark} className="park-name">{viewPark ? fullname :
                <ParkDetails
                    key={id}
                    id={id}
                    fullname={fullname}
                    images={images}
                    activities={activities}
                    addresses={addresses}
                    description={description}
                    directionsUrl={directionsUrl}
                />
            }</h4>
        </div>
    )
}

export default Park
