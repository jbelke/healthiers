import React from 'react'
import { SideBar, Title, Menu, MenuItem, } from '../components/sidebar'
import { Content, Header } from '../components/content'

const AppContainer = ({ children }) => <div>
  <SideBar>
    <Title icon="heartOutline" title="Healthiers" />
    <Menu>
      <MenuItem icon="fileOutline" text="My Records" link="#" />
      <MenuItem icon="envelopeOutline" text="Messages" link="#" />
      <MenuItem icon="balanceScale" text="Expenses" link="#" />
      <MenuItem icon="userOutline" text="Doctors" link="#" />
      <MenuItem icon="hospitalOutline" text="Hospitals" link="#" />
    </Menu>
  </SideBar>
  <Header> </Header>
  <Content>{children}</Content>
</div>

export default AppContainer
