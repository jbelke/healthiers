import React from 'react'
import classNames from 'classnames'

import { cardRow, cardCell, card } from './style'

export const CardContainer = ({ children }) => (<div className={cardRow}>
  {children}
</div>)

export const Card = ({children, className}) => <div className={cardCell}>
  <div className={classNames(className, card)}>
    {children}
  </div>
</div>

