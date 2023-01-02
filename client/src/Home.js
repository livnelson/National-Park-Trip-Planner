import { Redirect } from "react-router-dom";

function Home ({ user, isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/" />;

  return (
    <div className='home-page'>
      <h1>Welcome, {user.first_name}!</h1>
    </div>
  );
}

export default Home;