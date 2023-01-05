import React, { useState } from 'react'


function ParkActivities({ activity, handleSubmit }) {

    const [isChecked, setIsChecked] = useState(false);

    //console.log(activity)

    function handleChange() {
        setIsChecked(!isChecked)
        if (isChecked) {
            return true
        }
    }

    return (
        <form className='checkboxes' onSubmit={handleSubmit}>
            <input type="checkbox" onChange={handleChange} checked={isChecked} />
            <label>{activity}</label>
            <button>Submit</button>
        </form>
    )
}

export default ParkActivities

