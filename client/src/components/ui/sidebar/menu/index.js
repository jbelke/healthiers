import React from 'react'
import { Link } from 'react-router'

import { Icon } from '../../icon'
import { menu, menuItem, activeMenuItem, icon as iconClass, text as textClass } from './style'

export const Menu = ({children}) => (<nav className={menu}>
  <ul>
    {children.map((child, i) => <li key={`menu-item-${i}`}>{child}</li>)}
  </ul>
</nav>)

export const MenuItem = ({icon, text, link}) => (<Link to={link} activeClassName={activeMenuItem} >
  <span className={menuItem} href={link}>
    <Icon className={iconClass} name={icon} /> <span className={textClass}>{text}</span>
  </span>
</Link>
)
