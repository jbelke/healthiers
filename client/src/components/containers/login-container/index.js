import React from 'react'
import { connect } from 'react-redux'
import { linkState } from '../../utils'
import { autobind } from 'core-decorators'

import { requestedLogin } from '../../../actions'

import { pageContainer, pageHeader, pageContent, loginContainer, inputField, pageTitle, logo, loginButton } from './style'
import { Icon } from '../../ui/icon'
import { TextField } from '../../ui/text-field'
import { Button } from '../../ui/button'

const mapStateToProps = ({ login }) => ({ login })
const mapDispatchToProps = { requestedLogin }

@connect(mapStateToProps, mapDispatchToProps)
export class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  @autobind() onLoginClick() {
    const { email, password } = this.state
    if (email.length === 0 || password.length === 0) {
      return
    }
    this.props.requestedLogin(email, password)
  }

  render() {
    const { email, password } = this.state
    const loginDisabled = email.length === 0 || password.length === 0
    const { onLoginClick } = this
    return <div className={pageContainer}>
      <div className={loginContainer}>
        <div className={pageHeader}>
          <h1 className={pageTitle}>
            <Icon className={logo} name='heartOutline' /><span> Healthiers</span>
          </h1>
        </div>
        <div className={pageContent}>
          <TextField className={inputField} onChange={linkState(this, 'email')} placeholder='E-mail address' value={email} />
          <TextField className={inputField} onChange={linkState(this, 'password')} type='password' placeholder='Password' value={password} />
          <Button disabled={loginDisabled} onClick={onLoginClick} className={loginButton} text="Login" primary />
        </div>
      </div>
    </div>
  }
}
