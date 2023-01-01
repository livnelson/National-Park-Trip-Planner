import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Home from './Home'


function Login() {
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [showUser, setShowUser] = useState(false);


  const history = useHistory()

  const { username, password } = formData

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      password
    }

    // Logs in user
    fetch(`/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(userData => {
            console.log(userData)
            setUser(userData)
            history.push(`/users/${user.id}`)
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleUser() {
    setShowUser(!showUser);
  }

  return (
    <div>
      <div className="login-card">
        <div className="login-form">
          <form onSubmit={onSubmit}>
            <input
              className="input-field"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={handleChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleChange}
              required
            />
            <br />
            <button className="button" type="submit">Log In</button>
          </form>
        </div>
      </div>
      <p className="create-acc-link">Need an account? <a href="/CreateUser">Create one here!</a></p>
      {errors ? <div className="errors">{errors}</div> : null}
      <Home user={user} handleUser={handleUser} showUser={showUser} />
    </div>
  )
}

export default Login