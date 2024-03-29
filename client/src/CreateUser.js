import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function CreateUser() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const history = useHistory();

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleProfileImgChange(e) {
    setProfileImg(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    const userObj = {
      first_name: firstName,
      last_name: lastName,
      username,
      password,
      profile_img: profileImg,
    };
    console.log(userObj);

    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(userObj),
    };

    fetch("/create", configObject)
      .then((r) => r.json())
      .then((user) => {
        setFirstName("");
        setLastName("");
        setUsername("");
        setPassword("");
        setProfileImg("");
        history.push(`/users/${user.id}`)
      });
  }

  return (
    <div>
      <div className="create-user-card">
        <img src={"./road-trip-logo.png"} alt="Road Trip" className='logo-image' />
        <div className="create-user-form">
          <form onSubmit={handleSubmit}>
            <input
              className="create-input-field"
              name="username"
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={handleUsernameChange}
              required
            />
            <br />
            <input
              className="create-input-field"
              name="password"
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={handlePasswordChange}
              required
            />
            <br />
            <input
              className="create-input-field"
              name="first_name"
              type="text"
              value={firstName}
              placeholder="Enter Your First Name"
              onChange={handleFirstNameChange}
              required
            />
            <br />
            <input
              className="create-input-field"
              name="last_name"
              type="text"
              value={lastName}
              placeholder="Enter Your Last Name"
              onChange={handleLastNameChange}
              required
            />
            <br />
            <input
              className="create-input-field"
              name="profile_img"
              value={profileImg}
              placeholder="Enter Profile Img URL Here"
              onChange={handleProfileImgChange}
              required
            />
            <br />
            <button className="button" type="submit">Create Account</button>
          </form>
        </div>
          {/* {errors ? <div className="errors">{errors}</div> : null} */}
          <p className="back-link"><Link to="/">← Back to Log In</Link></p>
      </div>
    </div>
  )
}

export default CreateUser;