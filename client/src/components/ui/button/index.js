import React from 'react'
import classNames from 'classnames'
import style, { button } from './style'

export const Button = ({type, text, className, ...rest}) => {
  if (type && !style[type]) {
    throw new Error(`Unknown button type ${type}`)
  }
  const typeClass = style[type || 'normal']
  const classes = classNames(button, typeClass, className)
  return <button className={classes} {...rest}>
    {text}
  </button>
}
