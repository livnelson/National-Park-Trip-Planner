import React, { useState } from 'react'


function ParkActivities({ activity }) {

    const [checkBoxes, setCheckBoxes] = useState([]);

    console.log(activity)

    const handleChange = event => {
        const checkbox = event.target;
        setCheckBoxes(prevCheckBoxes =>
            prevCheckBoxes.map(cb => {
                if (cb.id === checkbox.id) {
                    return { ...cb, checked: checkbox.checked };
                }
                return cb;
            })
        );
    };

    return (
        <div className='checkboxes'>
            <input type="checkbox" onChange={handleChange} checked={checkBoxes} />
            <label>{activity}</label>
        </div>
    )
}

export default ParkActivities

