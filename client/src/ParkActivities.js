import React, { useState } from 'react'


function ParkActivities({ activity, checkedActivities }) {

    // const [isChecked, setIsChecked] = useState("checked")
    const [isChecked, setIsChecked] = useState(true)

    function handleChange() {
        setIsChecked(!isChecked)
            console.log(isChecked)

        // if (isChecked === "checked") {
        //     setIsChecked("unchecked")
        //     // checkedActivities.push(activity)
        //     // console.log(checkedActivities)
        // }
        // else setIsChecked("checked")
        // // console.log(activity)
        // // if (isChecked
        // // setIsChecked(!isChecked)
        // // return true
    }

    function checkForChecks() {
        handleChange()
        if (isChecked === true) {
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
        <div className="activities">
            {/* <input type="checkbox" onChange={checkForChecks} checked={isChecked === "checked"} /> */}
            <input type="checkbox" id="checkbox-style" onChange={checkForChecks} checked={isChecked} />
            <label>{activity}</label>
        </div>
    )
}

export default ParkActivities