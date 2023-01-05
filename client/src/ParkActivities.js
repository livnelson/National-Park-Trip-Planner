import React, { useState } from 'react'


function ParkActivities({ activity }) {

    const [isChecked, setIsChecked] = useState(false)
    const [checkedActivities, setCheckedActivities] = useState([])

    //console.log(activity)


    function handleChange() {
        //console.log(activity)
        setIsChecked(!isChecked)
        if (isChecked) {

            return
        }
    }

    function createClickedActivitiesArray() {
        setCheckedActivities(...checkedActivities, activity)
        console.log(activity)
    }

    console.log(checkedActivities)

    return (
        <div>
            <input type="checkbox" onChange={handleChange} createCLickedActivitiesArray={createClickedActivitiesArray} checked={isChecked} />
            <label>{activity}</label>
        </div>
    )
}

export default ParkActivities

