import React from 'react'
import CreateTrip from './CreateTrip'
import ParkActivities from './ParkActivities'


function ParkDetails({ id, fullname, images, activities, addresses, description, directionsUrl }) {

  const filteredAddresses = addresses.filter(address => {
    if (address.type === "Physical")
      return true
  })

  console.log(activities)

  const mappedAddresses = filteredAddresses.map(address => {
    return (
      <div>
        <h6>Park Address:</h6>
        <div className="park-address">
          <p>{address.line1}</p>
          <p>{address.city}, {address.stateCode} {address.postalCode}</p>
        </div>
      </div>)
  })

  const mappedImages = images.map(image => {
    return (
      <div className="image-card-style">
        <img src={image.url} alt={image.altText} className="park-card-image" />
        <p>{image.title}</p>
        {/* <p>{image.caption}</p> */}
        <p className="photo-cred">{image.credit}</p>
      </div>
    )
  })

  let activityNames = []

  const mappedActivities = activities.map(activity => {
    activityNames.push(activity.name)

    return <li>{activity.name}</li>
  })

  console.log(activityNames)

  // console.log(fullname)
  // console.log(addresses)
  // console.log(description)

  function saveTrip() {
    // const mappedActivitiesToo = activities.map(activity => {
    //   return <li>{activity.name}</li>
    // })
    console.log(`Save button clicked, trip id: ${id}, name: ${fullname}`)
  }

  //console.log(`Save button clicked, trip id: ${id}, name: ${fullname}, activities: ${saveTrip}`)
  console.log(mappedActivities)

  return (
    <div className="park-detail-card">
      <h4>{fullname}</h4>
      <p className="park-description">{description}</p>
      <br />
      <span>{mappedAddresses}</span>
      <button className="save-button" onClick={saveTrip}>Save Park and Create a Trip</button>
      <div>
        <br />
        <h6>Park Activities:</h6>
        <ul className="activity-details">{mappedActivities}</ul>
      </div>
      <div>
        <h6>Park Images:</h6>
        <span className="image-cards">{mappedImages}</span>
      </div>
      <CreateTrip fullname={fullname} id={id} saveTrip={saveTrip} activityNames={activityNames} mappedActivities={mappedActivities} />
    </div>
  )

}


export default ParkDetails