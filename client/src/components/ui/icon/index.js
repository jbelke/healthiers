import React from 'react'
import classNames from 'classnames'

import iconStyles, { icon } from './style'

export const Icon = ({name, style, className}) => {
  const iconClass = iconStyles[name]
  if (!iconClass) {
    throw new Error(`unknown icon ${name}`)
  }
  const fullClass = classNames(icon, iconClass, className)
  return <i className={fullClass} style={style}></i>
}
