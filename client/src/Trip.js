import { useHistory, useParams, Link } from 'react-router-dom'
import React, { useState } from 'react'
import EditTrip from './EditTrip'
// import ViewTrip from './ViewTrip'

function Trip({ id, trip, deleteTrip, user, updateTrip, apiPark_id }) {

  const { fullname, start_date, end_date } = trip
  console.log("Trip check")

  const history = useHistory()
  // const params = useParams()
  const [editTrip, setEditTrip] = useState(false)




  function handleDelete(id) {
    fetch(`/trips/${trip.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          deleteTrip(trip.id)
          history.push(`/users/${user.id}`)
        } else {

          res.json().then(data => console.log("no bueno"))
        }
      })
  }

  function handleEdit() {
    setEditTrip(!editTrip)
    // history.push(`/ViewTrip/${trip.id}`)
    //history.push(`/`)
  }


  return (
    <div>
      {editTrip ? <EditTrip key={id} id={id} fullname={fullname} user={user} trip={trip} /> : <div className="cards">
        <div className="trip-detail-card">
          <h4 className="cards__item">{fullname}</h4>
          <p className="card__text"><strong>Start Date:</strong> <br />{start_date}</p>
          <p className="card__text"><strong>End Date:</strong> <br />{end_date}</p>
          <span className="edit-icon" onClick={handleEdit}>✎</span>
          <span className="delete-icon" onClick={handleDelete}>⊗</span>
        </div>

      </div>
      }
    </div>
  )
}

export default Trip