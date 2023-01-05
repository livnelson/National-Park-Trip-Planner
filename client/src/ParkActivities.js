import React, { useState } from 'react'


function ParkActivities({ activity }) {

    const [isChecked, setIsChecked] = useState(false)

    function handleChange(){
      setIsChecked(!isChecked)
      if (isChecked) {
        return true
      }
    }

    return (
        <div>
            <input type="checkbox" onChange={handleChange} checked={isChecked} />
            <label>{activity}</label>
        </div>
    )
}

export default ParkActivities

