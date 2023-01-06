import React, { useState } from 'react'

function EditTrip({ user, fullname, trip, activityNames, activities, apiPark_id }) {
    const [errors, setErrors] = useState([])
    const [userActivities, setUserActivities] = useState({})
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [updateTrip, setUpdateTrip] = useState({})


    let checkedActivities = []

    console.log(apiPark_id)
    //console.log(id)

    function handleStartDateChange(e) {
        setStartDate(e.target.value)
    }

    function handleEndDateChange(e) {
        setEndDate(e.target.value)
    }

    // const mappedActivities = activities.map(activity => {
    //     return activity.name
    // })

    function handleEditTrip(e) {
        e.preventDefault()

        //console.log(user)

        const configTrip = {
            fullname,
            start_date: startDate,
            end_date: endDate,
            user_id: user.id
        }
        console.log(configTrip)


        fetch(`/updatetrip`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(configTrip)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(trip => {
                        console.log(trip)
                        setUpdateTrip(trip)
                    })
                } else {
                    res.json().then(json => setErrors(json.errors))
                }
            })


    }


    return (
        <div>
            <h3>Create a Trip</h3>
            <div className="user-card">
                <div className="user-form">
                    <form onSubmit={handleEditTrip}>
                        <input
                            className="user-input-field"
                            name="fullname"
                            type="text"
                            value={fullname}
                            placeholder={fullname}
                            //onChange={handleDestinationChange}
                            required
                        />
                        <br />
                        <input
                            className="user-input-field"
                            name="start_date"
                            type="date"
                            value={startDate}
                            placeholder="Enter Start Date"
                            onChange={handleStartDateChange}
                            required
                        />
                        <br />
                        <input
                            className="user-input-field"
                            name="end_date"
                            type="date"
                            value={endDate}
                            placeholder="Enter End Date"
                            onChange={handleEndDateChange}
                            required
                        />
                        <br />

                        <br />
                        <button className="button" type="submit" >Save Your Trip</button>
                        {/* <button className="button" type="submit" >Save Your Trip</button> */}
                    </form>
                </div>
            </div>
        </div >
    )
}

export default EditTrip