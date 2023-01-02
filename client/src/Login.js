import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'


function Login({ setIsLoggedIn }) {
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const history = useHistory()

  const { username, password } = formData

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      password
    }

    fetch(`/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            console.log(user)
            setUser(user)
            setIsLoggedIn(true)
            history.push(`/Home`)
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

  return (
    <div>
      <div className="login-card">
        <img src={"./road-trip-logo.png"} alt="Road Trip" className='logo-image'/>
        <div className="login-form">
          <form onSubmit={onSubmit}>
            <input
              className="input-field"
              name="username"
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={handleChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="password"
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
            <br />
            <button className="button" type="submit">Log In</button>
          </form>
      </div>
      {errors ? <div className="errors">{errors}</div> : null}
      <p className="create-acc-link"> Need an account? <a href="/CreateUser">Create one here!</a></p>
        </div>
    </div>
  )
}

export default Login