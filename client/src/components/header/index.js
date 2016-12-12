import React from 'react'

import { header, logo } from './header'

const Header = ({title}) => <div className={header}>
  <h1 className={logo}>{title}</h1>
</div>

export default Header
