import React from 'react'
import { pageTitle } from './style'
import Icon from '../../icon'

export const PageTitle = ({title, children}) => (<div className={pageTitle}>
  <h2><Icon name="angleRight" /> {title}</h2>
  {children}
</div>)
