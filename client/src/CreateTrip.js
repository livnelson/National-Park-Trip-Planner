import React, { useState } from 'react'
import ParkActivities from './ParkActivities';

function CreateTrip({ user, fullname, id, activityNames, mappedImages, activities, checkedActivities }) {
  const [errors, setErrors] = useState([])
  const [trip, setTrip] = useState({})
  const [userActivities, setUserActivities] = useState({})
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [tripActivities, setTripActivities] = useState('')

  console.log(id)

  function handleStartDateChange(e) {
    setStartDate(e.target.value)
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value)
  }

  // const mappedActivities = activities.map(activity => {
  //   return activity.name
  // })

  async function handleSaveTrip(e) {
    e.preventDefault()

    console.log(user)

    const configTrip = {
      fullname,
      start_date: startDate,
      end_date: endDate,
      user_id: user.id,
      activities: checkedActivities.join(', ')
      //apiPark_id: id
    }
    console.log(configTrip)

    // const configActivities = {
    //   name: checkedActivities.join(", "),
    //   trip_id: trip.id
    //   //apiPark_id: id
    // }

    // console.log(configActivities)

     fetch(`/newtrip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(configTrip)
    })
      .then(res => {
        if (res.ok) {
            res.json().then(trip => {
            console.log(trip)
             setTrip(trip)
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
      
      // await console.log(trip)

  //   await fetch(`/newactivities`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(configActivities)
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then(resp => {
  //           console.log(resp)
  //           setTrip(trip)
  //           setUserActivities(resp)
  //         })
  //       } else {
  //         res.json().then(json => setErrors(json.errors))
  //       }
  //     })
  }


  return (
    <div>
      <h3>Create a Trip</h3>
      <div className="user-card">
        <div className="user-form">
          <form onSubmit={handleSaveTrip}>
            <h4 className="park-name-create">{fullname}</h4>
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
            {activityNames.map(activity => <ParkActivities key={trip.id} activity={activity} checkedActivities={checkedActivities} />)}
            <button className="button" type="submit" >Save Your Trip</button>
            {/* <button className="button" type="submit" >Save Your Trip</button> */}
          </form>
        </div>
      </div>
    </div >
  )
}

export default CreateTrip