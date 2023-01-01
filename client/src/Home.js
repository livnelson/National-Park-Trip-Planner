// import React, { useState, useEffect } from 'react'
import UserPage from './UserPage'

function Home({ user, handleUser, showUser }) {
  

  return (
    <div>
      <div>
        <h1>Welcome, {user.first_name}!</h1>
        <button onClick={handleUser}>
          {showUser ? "Back to Home" : "View Profile"}
        </button>
      </div>
      {showUser ? (
        <UserPage
          user={user}
        />
      ) : (
        <div>
          {/* <CreateTrip user={user} />{" "}
              <Trips user={user} users={users} /> */}
        </div>
      )}
    </div>
  );
}

export default Home;