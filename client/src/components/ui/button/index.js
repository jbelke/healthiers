import React from 'react'
import classNames from 'classnames'
import style, { button } from './style'

export const Button = ({kind, text, className, ...rest}) => {
  if (kind && !style[kind]) {
    throw new Error(`Unknown button kind ${kind}`)
  }
  const typeClass = style[kind || 'normal']
  const classes = classNames(button, typeClass, className)
  return <button className={classes} {...rest}>
    {text}
  </button>
}
