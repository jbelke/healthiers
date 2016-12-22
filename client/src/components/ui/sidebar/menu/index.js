import React from 'react'
import Icon from '../../icon'
import { menu, menuItem } from './style'

export const Menu = ({children}) => (<nav className={menu}>
  <ul>
    {children.map((child, i) => <li key={`menu-item-${i}`}>{child}</li>)}
  </ul>
</nav>)

export const MenuItem = ({icon, text, link}) => (<a className={menuItem} href={link}>
  <Icon name={icon} /> {text}
</a>)
