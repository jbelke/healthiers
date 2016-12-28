import React from 'react'
import { connect } from 'react-redux'
import { autobind } from 'core-decorators'

import { requestedSignup, updateSignupFields } from '../../../actions/signup'

import { TextField } from '../../ui/text-field'
import { Button } from '../../ui/button'
import { FullPageContainer, FormContainer, FormHeader, FormContent } from '../../fragments/auth-forms'

const mapStateToProps = ({ signup }) => ({ signup })
const mapDispatchToProps = { requestedSignup, updateSignupFields }

@connect(mapStateToProps, mapDispatchToProps)
export class SignupContainer extends React.Component {
  @autobind() onSubmit(event) {
    event.preventDefault()
    if (!this.fieldsMissing(this.props.signup)) {
      const { email, firstName, lastName, password} = this.props.signup
      this.props.requestedSignup({ email, firstName, lastName, password })
    }
  }

  @autobind() fieldsMissing({ email, firstName, lastName, password, passwordRepeat }) {
    return !email || email.length === 0
      || !firstName || firstName.length === 0
      || !lastName || lastName.length === 0
      || !password || password.length === 0
      || !passwordRepeat || passwordRepeat.length === 0
  }

  @autobind() buttonText(props) {
    const { password, passwordRepeat, error, signupInProgress, signupSuccessful } = props
    if (signupInProgress) {
      return 'Signing you up...'
    } else if (signupSuccessful) {
      return 'Going to login...'
    } else if (error) {
      return 'Unsuccessful sign-up'
    } else if (this.fieldsMissing(props)) {
      return 'Missing field(s)'
    } else if (password !== passwordRepeat) {
      return `Passwords don't match`
    }
    return 'Sign me up!'
  }

  @autobind() buttonKind(props) {
    const { password, passwordRepeat, error, signupSuccessful } = props
    if (this.fieldsMissing(props)) {
      return 'primary'
    } else if (password !== passwordRepeat || error) {
      return 'error'
    } else if (signupSuccessful) {
      return 'success'
    }
    return 'primary'
  }

  @autobind() buttonDisabled(props) {
    const { password, passwordRepeat, signupInProgress, signupSuccessful } = props
    return this.fieldsMissing(props) ||
      password !== passwordRepeat ||
      signupInProgress ||
      signupSuccessful
  }

  @autobind() updateEmail(event) {
    this.props.updateSignupFields({ email: event.target.value })
  }

  @autobind() updateFirstName(event) {
    this.props.updateSignupFields({ firstName: event.target.value })
  }

  @autobind() updateLastName(event) {
    this.props.updateSignupFields({ lastName: event.target.value })
  }

  @autobind() updatePassword(event) {
    this.props.updateSignupFields({ password: event.target.value })
  }

  @autobind() updatePasswordRepeat(event) {
    this.props.updateSignupFields({ passwordRepeat: event.target.value })
  }

  render() {

    const {onSubmit, updateEmail, updateFirstName, updateLastName, updatePassword,
      updatePasswordRepeat, buttonDisabled, buttonText, buttonKind} = this

    const props = this.props.signup
    const {email, firstName, lastName, password, passwordRepeat } = props

    return <FullPageContainer>
      <FormContainer>
        <FormHeader icon='heartOutline' title='Healthiers' />
        <FormContent onSubmit={onSubmit}>
          <TextField onChange={updateEmail} placeholder='E-mail address' value={email || ''} />

          <TextField onChange={updateFirstName} placeholder='First name' value={firstName || ''} />
          <TextField onChange={updateLastName} placeholder='Last name' value={lastName || ''} />

          <TextField onChange={updatePassword} type='password' placeholder='Password' value={password || ''} />
          <TextField onChange={updatePasswordRepeat} type='password' placeholder='Repeat password' value={passwordRepeat || ''} />

          <Button disabled={buttonDisabled(props)} text={buttonText(props)} type='submit' kind={buttonKind(props)} />
        </FormContent>
      </FormContainer>
    </FullPageContainer>
  }
}
