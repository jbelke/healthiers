import React from 'react'
import classNames from 'classnames'
import { button, primary as primaryClass, normal as normalClass } from './style'

export const Button = ({primary, text, className, ...rest}) => {
  const classes = classNames(button, primary ? primaryClass : normalClass, className)
  return <button className={classes} {...rest}>
    {text}
  </button>
}
