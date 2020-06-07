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

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login(formData)
      setToken(res.data.token)
      history.push('/myprofile')
    } catch (err) {
      console.log(err)
    }
  }

  if (!formData) return null
  // console.log(formData)
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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