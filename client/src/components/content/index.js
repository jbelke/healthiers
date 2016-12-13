import React from 'react'

import { content, outerContent, header } from './style'

export const Header = ({children}) => (<div className={header}>
  {children}
</div>)

export const Content = ({children}) => (<div className={outerContent}>
  <div className={content}>
    {children}
  </div>
</div>)
