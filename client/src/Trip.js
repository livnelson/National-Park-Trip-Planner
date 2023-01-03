
import React from 'react'

function Trip({ trip }) {

  const { destination, start_date, end_date, dest_img } = trip
  console.log("Trip check")

  return (
    <div className="cards">
      <div className="card">
        <img src={dest_img} alt={destination} className="card__image" />
        <h4 className="cards__item">{destination}</h4>
        <p className="card__text"><strong>Start Date:</strong> <br />{start_date}</p>
        <p className="card__text"><strong>End Date:</strong> <br />{end_date}</p>
        <span className="edit-icon">✎</span>
        <span className="delete-icon">⊗</span>
        </div>
      </div>
  )
}

export default Trip
