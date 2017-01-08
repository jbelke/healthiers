import React from 'react'
import { Link } from 'react-router'
import { Icon } from '../../ui/icon'
import { container, profileLink } from './style'

const UserPresent = ({name, link}) => (<Link className={profileLink} to={link}>
  <Icon name='userOutline' /> <span>{name}</span>
</Link>)

const NoUser = () => <span>No user</span>

export const HeaderControls = ({name, link}) => <div className={container}>
  {name ? <UserPresent name={name} link={link} /> : <NoUser />}
</div>
