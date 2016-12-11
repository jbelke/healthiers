import React from 'react'
import classNames from 'classnames'

import iconStyles from './icon'

const Icon = ({name, style, className}) => {
  const iconClass = iconStyles[name]
  if (!iconClass) {
    throw new Error(`unknown icon ${name}`)
  }
  return <i className={classNames(iconClass, className)} style={style}></i>
}

export default Icon
