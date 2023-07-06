import React, { useState } from 'react'
import { styled } from 'styled-components'

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    
  }

  return (
    <LoginForm>
      <input type="email" placeholder="usuario@mail.com" onChange={e => setEmail(e.target.value)}></input>
      <input type="password" onChange={e => setPassword(e.target.value)}></input>
      <button type="submit" onSubmit={login}></button>
    </LoginForm>
  )
}

export default Login