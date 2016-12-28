import React from 'react'
import { fullPageContainer, pageHeader, pageContent, container, pageTitle, logo } from './style'
import { Icon } from '../../ui/icon'

export const FullPageContainer = ({ children, ...rest }) => (<div className={fullPageContainer} {...rest} >
  {children}
</div >)

export const FormContainer = ({ children, ...rest }) => (<div className={container} {...rest}>
  {children}
</div>)

export const FormHeader = ({ title, icon }) => (<div className={pageHeader}>
  <h1 className={pageTitle}>
    <Icon className={logo} name={icon} /><span> {title}</span>
  </h1>
</div>)

export const FormContent = ({children, ...rest}) => (<form className={pageContent} {...rest}>
  {children}
</form>)
