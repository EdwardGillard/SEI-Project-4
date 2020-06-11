import React from 'react'
import { login } from '../../lib/api'
import { useHistory } from 'react-router-dom'
import { setToken } from '../../lib/auth'

function Login() {
  const history = useHistory()
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = React.useState('')

  const handleChange = e => {
    setErrors('')
    setFormData({ errors, ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login(formData)
      setToken(res.data.token)
      history.push('/myprofile')
    } catch (err) {
      setErrors(err.response)
    }
  }

  if (!formData) return null
  return (
    <div className="main-page" >
      <h1>Login Page</h1>
      <div className="auth-box login-box">
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors ? 'red' : ''}
            />
          </div>
          <div className="auth-input">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors ? 'red' : ''}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login