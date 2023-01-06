import React, { useState } from 'react'
import CheckboxTree from "react-dynamic-checkbox-tree";
import ParkActivities from './ParkActivities';

function CreateTrip({ user, fullname, id, activityNames, mappedImages, activities }) {
  const [errors, setErrors] = useState([])
  const [trip, setTrip] = useState({})
  const [userActivities, setUserActivities] = useState({})
  //const [destination, setDestination] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [destImg, setDestImg] = useState('')
  //const [checkBoxes, setCheckBoxes] = useState(null);

  let checkedActivities = []
  // const [formData, setFormData] = useState({
  //   destination: destination,
  //   start_date: startDate,
  //   end_date: endDate
  // })

  console.log(id)

  //const formatYmd = date => date.toISOString().slice(0, 10);

  // function handleDestinationChange(e) {
  //   setDestination(e.target.value)
  // }

  function handleStartDateChange(e) {
    setStartDate(e.target.value)
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value)
  }

  // function handleActivityChange(e) {
  //   setDestImg(e.target.value)
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })

  const mappedActivities = activities.map(activity => {
    return activity.name
  })

  // console.log(mappedImages)

  function handleSaveTrip(e) {
    e.preventDefault()

    // const configImage = mappedImages.slice(0, 1)

    // console.log(configImage)
    console.log(user)

    const configTrip = {
      fullname,
      start_date: startDate,
      end_date: endDate,
      user_id: user.id,
      apiPark_id: id
    }
    console.log(configTrip)

    const configActivities = {

      name: checkedActivities.join(", "),
      apiPark_id: id
    }

    console.log(configActivities)

    // function stringify(configTrip) {
    //   let cache = [];
    //   let str = JSON.stringify(configTrip, function (key, value) {
    //     if (typeof value === "object" && value !== null) {
    //       if (cache.indexOf(value) !== -1) {
    //         // Circular reference found, discard key
    //         return;
    //       }
    //       // Store value in our collection
    //       cache.push(value);
    //     }
    //     return value;
    //   });
    //   cache = null; // reset the cache
    //   return str;
    // }


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


    fetch(`/newactivities`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(configActivities)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(resp => {
            console.log(resp)
            setUserActivities(resp)
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
          <form onSubmit={handleSaveTrip}>
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
            {activityNames.map(activity => <ParkActivities activity={activity} checkedActivities={checkedActivities} />)}
            <button className="button" type="submit" >Save Your Trip</button>
            {/* <button className="button" type="submit" >Save Your Trip</button> */}
          </form>
        </div>
      </div>
    </div >
  )
}

export default CreateTrip

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

{/* {mappedParkActivities} */ }
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