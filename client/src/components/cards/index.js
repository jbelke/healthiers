import React from 'react'
import classNames from 'classnames'

import style, { cardRow, card } from './style'

export const CardContainer = ({ children }) => (<div className={cardRow}>
  {children}
</div>)

export const Card = ({children, columns}) => {
  const cols = columns || 1
  if (cols > 6 || cols < 1) {
    throw new Error('invalid column count')
  }
  const colsClass = style[`cardCell${cols}`]

  return <div className={colsClass}>
    <div className={card}>
      {children}
    </div>
  </div>
}
