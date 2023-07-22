import React from 'react'
import { styled } from 'styled-components'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 80vw;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`


const Root = () => {
  return (
    <Wrapper>
      <Navigation />
      <Content>
        <Outlet></Outlet>
      </Content>
    </Wrapper>
  )
}

export default Root