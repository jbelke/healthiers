import React from 'react'
import Icon from '../icon'
import { sidebar, menu, title as titleClass } from './style'

export const Title = ({title, icon}) => (<div className={titleClass}>
  <h1>
    <Icon name={icon} /> {title}
  </h1>
</div>)

export const Menu = ({children}) => (<nav className={menu}>
  <ul>
    {children.map(child => <li>{child}</li>)}
  </ul>
</nav>)

export const MenuItem = ({icon, text, link}) => (<a href={link}>
  <Icon name={icon} /> {text}
</a>)

export const SideBar = ({children}) => (<div className={sidebar}>
  {children}
</div>)
