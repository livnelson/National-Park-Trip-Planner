import React from 'react'

const Park = ({ fullname, images, activities, addresses }) => {


    const filteredAddresses = addresses.filter(address => {
        if (address.type === "Physical")
            return true
    })

    const mappedAddresses = filteredAddresses.map(address => {
        return (
            <div>
                <p>{address.line1}</p>
                <p>{address.city}</p>
                <p>{address.stateCode}</p>
                <p>{address.postalCode}</p>
            </div>)
    })

    const mappedImages = images.map(image => {
        return <div>
            <img src={image.url} alt={image.altText} />
            <p>{image.title}</p>
            <p>{image.caption}</p>
            <p>{image.credit}</p>
        </div>
    })

    const mappedActivities = activities.map(activity => {
        return <p>{activity.name}</p>
    })

    //console.log(fullname)
    //console.log(addresses)
    return (
        <div>
            <h1>{fullname}</h1>
            <h1>{mappedAddresses}</h1>
            <h1>{mappedImages}</h1>
            <h1>{mappedActivities}</h1>
        </div>
    )
}

export default Park
