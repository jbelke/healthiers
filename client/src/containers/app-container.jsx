import React from 'react'
import { SideBar, Title } from '../components/sidebar'
import { Menu, MenuItem, } from '../components/sidebar/menu'
import { Content } from '../components/content'
import { Header } from '../components/header'
import { PageTitle } from '../components/header/page-title'
import { Avatar } from '../components/header/avatar'

// TODO change this!
const defaultProfilePic = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'

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
  <Header>
    <PageTitle title="My Records">
      <Avatar image={defaultProfilePic} pull="right" />
    </PageTitle>
  </Header>
  <Content>{children}</Content>
</div>

export default AppContainer
