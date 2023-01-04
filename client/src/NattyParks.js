import React, { useEffect, useState } from 'react'
import Park from './Park'
import ParkActivities from './ParkActivities'


function NattyParks({ parks }) {

    const [activities, setActivities] = useState([])
    //let allActivities

    console.log(parks)
    // console.log(filteredParks)

    useEffect(() => {
        fetch("https://developer.nps.gov/api/v1/activities?api_key=ejj9Xj8WF8yyAFJIN0Ev3IL3cZrsbkT6CCg0JJ5s")
            .then((r) => r.json())
            .then((activitiesArray) => {
                console.log(activitiesArray.data);
                setActivities(activitiesArray.data)
            });
    }, []);

    const mappedActivities = activities.map(activity => activity.name)

    console.log(mappedActivities)

    return (
        <div>
            <h1>Hello Wolrd!</h1>
            {mappedActivities.map(activity => <ParkActivities activity={activity} parks={parks} />)}
            <br />
        </div>
    )
}

export default NattyParks