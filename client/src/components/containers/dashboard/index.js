import React from 'react'

import { SideBar, Title } from '../../ui/sidebar'
import { Menu, MenuItem, } from '../../ui/sidebar/menu'
import { Content } from '../../ui/content'
import { Header } from '../../ui/header'
import { PageTitle } from '../../ui/header/page-title'
import { Avatar } from '../../ui/header/avatar'

// TODO change this!
const defaultProfilePic = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'

export const DashboardContainer = ({ children }) => <div>
  <SideBar>
    <Title icon="heartOutline" title="Healthiers" />
    <Menu>
      <MenuItem icon="fileOutline" text="My Records" link="/dashboard/records" />
      <MenuItem icon="envelopeOutline" text="Messages" link="/dashboard/messages" />
      <MenuItem icon="creditCard" text="Expenses" link="/dashboard/expenses" />
      <MenuItem icon="userOutline" text="Doctors" link="/dashboard/doctors" />
      <MenuItem icon="hospitalOutline" text="Hospitals" link="/dashboard/hospitals" />
    </Menu>
  </SideBar>
  <Header>
    <PageTitle title="My Records">
      <Avatar image={defaultProfilePic} pull="right" />
    </PageTitle>
  </Header>
  <Content>{children}</Content>
</div>
