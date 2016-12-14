import React from 'react'
import { header, pageTitle } from './style'
import Icon from '../icon'

export const Header = ({children}) => (<div className={header}>
  {children}
</div>)

export const PageTitle = ({title}) => (<div className={pageTitle}>
  <h2><Icon name="angleRight" /> {title}</h2>
</div>)
