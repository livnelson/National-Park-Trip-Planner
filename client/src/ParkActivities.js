import React, { useState } from 'react'


function ParkActivities({ activity, parks }) {

    const [isChecked, setIsChecked] = useState(false);

    console.log(parks)

    //console.log(activity)

    function handleSubmit() {

    }

    return (
        <div></div>
        //     <form className='checkboxes' onSubmit={handleSubmit}>
        //         <input type="checkbox" onChange={handleCheckChange} checked={isChecked} />
        //         <label>{activity}</label>
        //         <button>Submit</button>
        //     </form>
    )
}

export default ParkActivities

