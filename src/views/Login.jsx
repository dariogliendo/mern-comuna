import React, { useState } from 'react'
import { styled } from 'styled-components'
import axiosInstance from '../services/axios.service'

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 25vw;
  padding: 40px 20px;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 8px;
  background-color: #333333;
`

const ErrorMessage = styled.span`
  color: red;
`

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const login = async (e) => {
    try {
      if (e) e.preventDefault()
      const { data } = await axiosInstance.post('/auth/login', {
        email: email,
        password: password,
      })
      localStorage.setItem('session', JSON.stringify(data.sessionInfo))
      console.log(data.sessionInfo.token)
      axiosInstance.defaults.headers.authorization = data.sessionInfo.token
      window.location.reload()
    } catch (error) {
      switch(error.response?.status) {
        case 401: setError('Usuario o contraseña incorrectos'); break;
        case 403: setError('Debe ingresar usuario y contraseña'); break;
        default: setError('Hubo un error para identificarte')
      }
    }
  }

  const passwordChange = (e) => {
    if (error?.length) setError('')
    setPassword(e.target.value)
  }

  return (
    <LoginForm>
      <h1 style={{margin: 0}}>Ingresar</h1>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
      <input type="password" onChange={passwordChange} placeholder="Contraseña"></input>
      <button type="submit" onClick={e => login(e)}>Ingresar</button>
      {error.length ? <ErrorMessage>{error}</ErrorMessage> : ''}
    </LoginForm>
  )
}

export default Login