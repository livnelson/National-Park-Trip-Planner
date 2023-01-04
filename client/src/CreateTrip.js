import React, { useState } from 'react'
import CheckboxTree from "react-dynamic-checkbox-tree";
import ParkActivities from './ParkActivities';

function CreateTrip({ user, fullname, id, activityNames, mappedActivities }) {
  const [errors, setErrors] = useState([])
  const [trip, setTrip] = useState({})
  const [destination, setDestination] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [destImg, setDestImg] = useState('')
  const [checkBoxes, setCheckBoxes] = useState([]);
  // const [formData, setFormData] = useState({
  //   destination: destination,
  //   start_date: startDate,
  //   end_date: endDate
  // })


  //const formatYmd = date => date.toISOString().slice(0, 10);

  function handleDestinationChange(e) {
    setDestination(e.target.value)
  }

  function handleStartDateChange(e) {
    setStartDate(e.target.value)
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value)
  }

  function handleActivityChange(e) {
    setDestImg(e.target.value)
  }




  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })
  // }

  console.log(activityNames)

  // const mappedParkActivities = activityNames.forEach(activityName => {
  //   //console.log(activityName)
  //   return <label>
  //     <input type="checkbox" />
  //     {activityName}
  //   </label>
  // })



  console.log(mappedActivities)

  function onSubmit(e) {
    e.preventDefault()
    const configTrip = {
      destination,
      start_date: startDate,
      end_date: endDate,
      dest_img: destImg,
      user_id: user.id
    }
    console.log(configTrip)

    fetch(`/newtrip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(configTrip)
    })
      .then(res => {
        console.log("Hi again")
        if (res.ok) {
          res.json().then(trip => {
            console.log(trip)
            console.log("Hi")
            setTrip(trip)
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
          <form onSubmit={onSubmit}>
            <input
              className="user-input-field"
              name="destination"
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
            {/* <div>
              {mappedActivities.map((cb, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={cb.id}
                    checked={cb.checked}
                    onChange={handleChange}
                  />
                  <label htmlFor={cb.id}>{cb.label}</label>
                </div>
              ))}
            </div> */}

            {/* {mappedParkActivities} */}
            {/* <div>
              <CheckboxTree
                nodes={mappedActivities}
                checked={checked}
                onCheck={(checked) => setChecked(checked)}
              />
            </div>
            {checked.map((prop) => (
              <li key={prop}>value: {prop}</li>
            ))} */}
            {/* <input
                        className="user-input-field"
                        name="park_activity"
                        type="checkbox"
                        value={mappedParkActivities}
                        //placeholder="Enter Destination Image URL"
                        onChange={handleActivityChange}
                        required
                      /> */}
            <br />
            {activityNames.map(activity => <ParkActivities activity={activity} />)}
            <button className="button" type="submit">Save Your Trip</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTrip