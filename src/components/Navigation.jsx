import React from 'react'
import { styled } from 'styled-components'
import routes from '../routes'
import { Link } from 'react-router-dom'

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 30px;
  height: 5vh;
  align-items: center;

  .main-logo {
    flex: 0;

    img {
      width: 60px;
      aspect-ratio: 1;
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex: 1
  }
`

const routeDisplay = () => {
  const mainRouting = routes.find(f => f.path === '/')
  return mainRouting.children.map((route, ix) => <Link to={route.path} key={ix}>{route.displayName}</Link>)
}

const Navigation = () => {
  return (
    <Wrapper>
      <div className="main-logo">
        <Link to="/">
          <img src="/comunalogo.png" alt="Logo depicting helical staircase" />
        </Link>
      </div>
      <div className="menu">
        {routeDisplay()}
      </div>
    </Wrapper>
  )
}

export default Navigation