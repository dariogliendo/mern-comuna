import React, { useState } from 'react'
import { styled } from 'styled-components'
import axiosInstance from '../services/axios.service'

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const login = async () => {
    try {
      const token = await axiosInstance.post('/auth/login', {
        email: email,
        password: password,
      })
      console.log(token)
    } catch (error) {
      setError(error.msg)
    }
  }

  return (
    <LoginForm>
      <input type="email" placeholder="usuario@mail.com" onChange={e => setEmail(e.target.value)}></input>
      <input type="password" onChange={e => setPassword(e.target.value)}></input>
      <button type="button" onClick={login}></button>
      {error ? <span>{error}</span> : ''}
    </LoginForm>
  )
}

export default Login