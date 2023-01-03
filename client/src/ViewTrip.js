import React, { useEffect } from 'react'
import {useState,} from 'react'
import {Link, useHistory} from 'react-router-dom'

function ViewTrip( { trip, deleteTrip, user, updateTrip, handleEdit } ) {

   const { destination, start_date, end_date, dest_img } = trip
   const history = useHistory()

  // const [tripData, setTripData] = useState({
  //   destination:'',
  //   startDate:'',
  //   endDate:''
  // })

  // // useEffect(() => {
  // //   fetch(`/trip/${trip.id}`).then((r) => {
  // //     if (r.ok) {
  // //       r.json().then((trip) => {
  // //       setTripData(trip)
  // //     }
  // //   )}
  // // }, []);

  function handleDelete(){
    fetch(`/trips/${trip.id}`,{
      
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteTrip(trip.id)
        history.push(`/users/${user.id}`)
      } else {

        res.json().then(data => console.log("no bueno"))
      }
    })
  }


  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setTripData({ ...tripData, [name]: value })
  // }

  // function onSubmit(e){
  //   e.preventDefault()
  //   //PATCH to `/productions/${id}`
  //   fetch(`/trips/${trip.id}`,{
  //     method:'PATCH',
  //     headers: {'Content-Type': 'application/json'},
  //     body:JSON.stringify(tripData)
  //   })
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(updateTrip)
  //     } else {
  //       //Display errors
  //       res.json().then(data => console.log('updated'))
  //     }
  //   })
  // }

  return (
   
      <div className="cards">
        <div className="card">
          <img src={dest_img} alt={destination} className="card__image" />
          <h4 className="cards__item">{destination}</h4>
          <p className="card__text"><strong>Start Date:</strong> <br />{start_date}</p>
          <p className="card__text"><strong>End Date:</strong> <br />{end_date}</p>
          <span className="edit-icon" onClick={handleEdit}>✎</span>
          <span className="delete-icon" onClick={handleDelete}>⊗</span>
          <Link to="/ViewTrip" handleEdit={handleEdit}>View Trip</Link>
          </div>
        </div>
    )
  }



export default ViewTrip