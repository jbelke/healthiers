import React from 'react'

import { SideBar, Title } from '../../ui/sidebar'
import { Menu, MenuItem, } from '../../ui/sidebar/menu'

export const DashboardRoute = ({ children }) => <div>
  <SideBar>
    <Title icon="heartOutline" title="Healthiers" />
    <Menu>
      <MenuItem icon="list" text="Records" link="/dashboard/records" />
      <MenuItem icon="envelopeOutline" text="Messages" link="/dashboard/messages" />
      <MenuItem icon="creditCard" text="Expenses" link="/dashboard/expenses" />
      <MenuItem icon="stethoscope" text="Doctors" link="/dashboard/doctors" />
      <MenuItem icon="hospitalOutline" text="Hospitals" link="/dashboard/hospitals" />
    </Menu>
  </SideBar>
  {children}
</div>
