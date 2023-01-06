import React, { useState } from 'react'


function ParkActivities({ activity, checkedActivities }) {

    const [isChecked, setIsChecked] = useState("checked")

    function handleChange() {

        if (isChecked === "checked") {
            setIsChecked("unchecked")
            // checkedActivities.push(activity)
            // console.log(checkedActivities)
        }
        else setIsChecked("checked")
        // console.log(activity)
        // if (isChecked
        // setIsChecked(!isChecked)
        // return true
    }

    function checkForChecks() {
        handleChange()
        if (isChecked === "checked") {
            checkedActivities.push(activity)
        }
        else {
            for (let i = 0; i < checkedActivities.length; i++) {
                if (checkedActivities[i] === activity) {
                    checkedActivities.splice(i, 1)
                }
            }
        }
    }


    console.log(checkedActivities)

    return (
        <div>
            <input type="checkbox" onChange={checkForChecks} checked={isChecked === "checked"} />
            <label>{activity}</label>
        </div>
    )
}

export default ParkActivities

