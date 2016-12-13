import React from 'react'

import { content, outerContent } from './content'

const Content = ({children}) => <div className={outerContent}>
  <div className={content}>
    {children}
  </div>
</div>

export default Content
