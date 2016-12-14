import React from 'react'

import { content, outerContent } from './style'

export const Content = ({children}) => (<div className={outerContent}>
  <div className={content}>
    {children}
  </div>
</div>)
