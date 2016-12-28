import React from 'react'
import { connect } from 'react-redux'
import { autobind } from 'core-decorators'

import { requestedLogin, updateLoginFields } from '../../../actions/login'

import { TextField } from '../../ui/text-field'
import { Button } from '../../ui/button'
import { FullPageContainer, FormContainer, FormHeader, FormContent } from '../../fragments/auth-forms'

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
    this.props.requestedLogin({ email, password })
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

    return <FullPageContainer>
      <FormContainer>
        <FormHeader icon='heartOutline' title='Healthiers' />
        <FormContent onSubmit={onSubmit}>
          <TextField onChange={updateEmail} placeholder='E-mail address' value={email || ''} />
          <TextField onChange={updatePassword} type='password' placeholder='Password' value={password || ''} />
          <Button disabled={buttonDisabled} text={buttonText} type='submit' kind={buttonType} />
        </FormContent>
      </FormContainer>
    </FullPageContainer>
  }
}
