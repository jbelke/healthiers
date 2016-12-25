import React from 'react'
import { pageContainer, pageHeader, pageContent, pageDescription, loginContainer, inputField, pageTitle, logo, loginButton } from './style'
import { Icon } from '../../ui/icon'
import { TextField } from '../../ui/text-field'
import { Button } from '../../ui/button'

export class LoginContainer extends React.Component {

  render() {
    return <div className={pageContainer}>
      <div className={loginContainer}>
        <div className={pageHeader}>
          <h1 className={pageTitle}>
            <Icon className={logo} name='heartOutline' /><span> Healthiers</span>
          </h1>
        </div>
        <div className={pageContent}>
          <TextField className={inputField} placeholder='E-mail address' />
          <TextField className={inputField} type='password' placeholder='Password' />
          <Button className={loginButton} text="Login" primary />
        </div>
      </div>
    </div>
  }
}
