import React from 'react'
import classNames from 'classnames'
import { textField, fieldContainer, fieldIcon } from './style'
import { Icon } from '../icon'

//<Icon className={fieldIcon} name='userOutline' />

export const TextField = ({className, type, ...rest}) => {
  return <div className={fieldContainer}>
    <input
      type={type || 'text'}
      className={classNames(textField, className)}
      {...rest} />
  </div>
}
