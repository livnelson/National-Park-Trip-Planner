import UserTrips from './UserTrips'
import Logout from './Logout'

function UserPage({ user, users, trips, setTrips }) {
  
    const filteredTrips = trips.filter((trip) => {
      return trip.user.id === user.id;
    });
  
    const mappedTrips = trips.map((trip) => {
      if (trip.user.id === user.id) {
        return (
          <UserTrips
            key={trip.id}
            user={user}
            users={users}
            trip={trip}
            trips={trips}
            setTrips={setTrips}
          />
        );
      }
    });
  
    return (
      <div>
        <h1>Hello User</h1>
         <Logout user={user}/>
        <div>
          <img
            className="profile-img"
            src={user.profile_img}
            alt={user.username}
          />
          <div>
            <h4>
              Your name: {user.first_name} {user.last_name}
            </h4>
            <h4>Your username: {user.username}</h4>
            <span>
              <em>{filteredTrips.length} posts</em>
            </span>
          </div>
        </div>
        <div>{mappedTrips}</div>
      </div>
    );
  }

export default UserPage