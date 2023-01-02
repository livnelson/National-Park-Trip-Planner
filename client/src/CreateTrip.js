import React, { useState } from 'react'

function CreateTrip({ parks }) {
  const [errors, setErrors] = useState([])
  const [trip, setTrip] = useState({})
  const [formData, setFormData] = useState({
    destination: '',
    start_date: '',
    end_date: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


  function onSubmit(e) {
    e.preventDefault()
    const trip = {
      destination: '',
      start_date: '',
      end_date: ''
    }

  //   fetch(`/newtrip`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(trip)
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then(trip => {
  //           console.log(trip)
  //           // setTrip(trip)
  //         })
  //       } else {
  //         res.json().then(json => setErrors(json.errors))
  //       }
  //     })
  }

  return (
    <div className="user-card">
      <div className="user-form">
        <form onSubmit={onSubmit}>
          <input
            className="user-input-field"
            name="destination"
            type="text"
            // value={destination}
            placeholder="Enter Destination"
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="user-input-field"
            name="start_date"
            type="date"
            // value={startDate}
            placeholder="Enter Start Date"
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="user-input-field"
            name="end_date"
            type="date"
            // value={endDate}
            placeholder="Enter End Date"
            onChange={handleChange}
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