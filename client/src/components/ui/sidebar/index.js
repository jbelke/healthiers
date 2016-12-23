import React from 'react'
import { Icon } from '../icon'
import { sidebar, title as titleClass, icon as iconClass, text as textClass } from './style'

export const Title = ({title, icon}) => (<div className={titleClass}>
  <h1>
    <Icon className={iconClass} name={icon} /> <span className={textClass}>{title}</span>
  </h1>
</div>)

export const SideBar = ({children}) => (<div className={sidebar}>
  {children}
</div>)
