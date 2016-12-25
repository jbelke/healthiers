import React from 'react'
import classNames from 'classnames'
import { textField } from './style'

export const TextField = ({className, type, ...rest}) => (<input
  type={type || 'text'}
  className={classNames(textField, className)}
  {...rest} />)
