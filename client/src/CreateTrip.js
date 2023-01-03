import React, { useState } from 'react'

function CreateTrip({ user }) {
  const [errors, setErrors] = useState([])
  const [trip, setTrip] = useState({})
  const [destination, setDestination] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [destImg, setDestImg] = useState('')
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

  function handleDestImgChange(e) {
    setDestImg(e.target.value)
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })
  // }


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
    <div className="user-card">
      <div className="user-form">
        <form onSubmit={onSubmit}>
          <input
            className="user-input-field"
            name="destination"
            type="text"
            value={destination}
            placeholder="Enter Destination"
            onChange={handleDestinationChange}
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
          <input
            className="user-input-field"
            name="dest_img"
            type="img"
            value={destImg}
            placeholder="Enter Destination Image URL"
            onChange={handleDestImgChange}
            required
          />
          <br />
          <button className="button" type="submit">Save Your Trip</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTrip