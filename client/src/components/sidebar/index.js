import React from 'react'
import Icon from '../icon'
import { sidebar, title as titleClass } from './style'

export const Title = ({title, icon}) => (<div className={titleClass}>
  <h1>
    <Icon name={icon} /> {title}
  </h1>
</div>)

export const SideBar = ({children}) => (<div className={sidebar}>
  {children}
</div>)
