import React from 'react'
import { connect } from 'react-redux'
import { autobind } from 'core-decorators'

import { requestedLogin, updateLoginFields } from '../../../actions'

import { pageContainer, pageHeader, pageContent, container, inputField, pageTitle, logo, submitButton } from './style'
import { Icon } from '../../ui/icon'
import { TextField } from '../../ui/text-field'
import { Button } from '../../ui/button'

const mapStateToProps = ({ login }) => ({ login })
const mapDispatchToProps = { requestedLogin, updateLoginFields }

@connect(mapStateToProps, mapDispatchToProps)
export class LoginContainer extends React.Component {
  @autobind() onSubmit(event) {
    event.preventDefault()

    const { email, password } = this.props.login
    if (!email || email.length === 0 || !password || password.length === 0) {
      return
    }
    this.props.requestedLogin(email, password)
  }

  buttonText(error, loginInProgress, loginSuccessful) {
    if (error) {
      return 'Unsuccessful attempt'
    } else if (loginInProgress) {
      return 'Logging you in...'
    } else if (loginSuccessful) {
      return 'Logged in'
    }
    return 'Login'
  }

  buttonType(error, loginInProgress, loginSuccessful) {
    if (error) {
      return 'error'
    } else if (loginSuccessful) {
      return 'success'
    }
    return 'primary'
  }

  @autobind updateEmail(event) {
    this.props.updateLoginFields({ email: event.target.value })
  }

  @autobind updatePassword(event) {
    this.props.updateLoginFields({ password: event.target.value })
  }

  render() {
    const { onSubmit, updateEmail, updatePassword } = this
    const { error, loginInProgress, loginSuccessful, email, password } = this.props.login

    const buttonDisabled = !email || email.length === 0 || !password || password.length === 0 || loginInProgress || error || loginSuccessful
    const buttonText = this.buttonText(error, loginInProgress, loginSuccessful)
    const buttonType = this.buttonType(error, loginInProgress, loginSuccessful)

    return <form className={pageContainer} onSubmit={onSubmit}>
      <div className={container}>
        <div className={pageHeader}>
          <h1 className={pageTitle}>
            <Icon className={logo} name='heartOutline' /><span> Healthiers</span>
          </h1>
        </div>
        <div className={pageContent}>
          <TextField className={inputField} onChange={updateEmail} placeholder='E-mail address' value={email || ''} />
          <TextField className={inputField} onChange={updatePassword} type='password' placeholder='Password' value={password || ''} />
          <Button disabled={buttonDisabled} className={submitButton} text={buttonText} type='submit' kind={buttonType} />
        </div>
      </div>
    </form>
  }
}
