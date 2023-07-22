import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const MainView = () => {
  const session = JSON.parse(localStorage.getItem('session'))

  return (
    <>
      <h1>Hola {session.name}!</h1>
      <ButtonMenu>
        <span>¿Qué querés hacer?</span>
        <Link to={'/limpieza'}>
          <button>Limpieza</button>
        </Link>
      </ButtonMenu>
    </>
  )
}

export default MainView