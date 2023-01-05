import React, { useEffect, useState } from 'react'
import Park from './Park'
import ParkActivities from './ParkActivities'


function NattyParks() {

    const [activities, setActivities] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [parksToo, setParksToo] = useState([])
    //let allActivities


    // console.log(filteredParks)

    useEffect(() => {
        fetch("https://developer.nps.gov/api/v1/activities?api_key=ejj9Xj8WF8yyAFJIN0Ev3IL3cZrsbkT6CCg0JJ5s")
            .then((r) => r.json())
            .then((activitiesArray) => {
                console.log(activitiesArray.data);
                //setActivities(activitiesArray.data)
                const mappedActivities = activitiesArray.data.map(activities => activities.name)
                setActivities(mappedActivities)

                console.log(mappedActivities)


            });
    }, []);

    useEffect(() => {
        fetch("https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=20&sort=&api_key=ejj9Xj8WF8yyAFJIN0Ev3IL3cZrsbkT6CCg0JJ5s")
            .then((r) => r.json())
            .then((parksArray) => {
                console.log(parksArray.data);
                const mappedParks = parksArray.data.map(parks => parks.name)

                setParksToo(parksArray)
                console.log(mappedParks)

            });
    }, []);

    // const pleaseWork = activities.forEach(activity => {
    //     console.log(activity)
    //     return (
    //         <label key={activity.name}>
    //             <input type="checkbox" />
    //             {activity.name}
    //         </label>
    //     );

    // })

    function handleCheckChange() {
        setIsChecked(!isChecked)
        if (isChecked) {
            return true
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("clicked")
        activities.forEach(activity => console.log(activity.name))
        //console.log(parksToo.activities.name)
    }



    // items.forEach(item => {
    //     return (
    //         <label key={item.id}>
    //             <input type="checkbox" />
    //             {item.name}
    //         </label>
    //     );
    // });



    //console.log(mappedActivities)

    return (
        <div>
            <h1>Hello Wolrd!</h1>
            {/* {mappedActivities.map(activity => <ParkActivities activity={activity} parks={parks} />)}
            <br /> */}
            {/* <form className='checkboxes' onSubmit={handleSubmit}>
                <button>Submit</button>
            </form> */}
            {activities.map(activity => <ParkActivities activity={activity} handleSubmit={handleSubmit} />)}
        </div>
    )
}

export default NattyParks