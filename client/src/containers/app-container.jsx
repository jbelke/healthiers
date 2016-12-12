import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Content from '../components/content'

const AppContainer = ({ children }) => <div>
  <Header title="Healthiers" />
  <Menu />
  <Content>{children}</Content>
</div>

export default AppContainer
