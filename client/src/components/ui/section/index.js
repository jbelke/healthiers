import React from 'react'
// import { Icon } from '../icon'
import { sectionHeader, sectionContent, sectionTitle, sectionNav, section } from './style'

export const SectionHeader = ({title}) => (<div className={sectionHeader}>
  <span className={sectionTitle}>{title}</span>
  <nav className={sectionNav}></nav>
</div>)

export const SectionContent = ({children}) => (<div className={sectionContent}>
  {children}
</div>)

export const Section = ({children}) => (<div className={section}>
  {children}
</div>)
