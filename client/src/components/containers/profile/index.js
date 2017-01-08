import React from 'react'
import { Content } from '../../ui/content'
import { Header } from '../../ui/header'
import { PageTitle } from '../../ui/header/page-title'
import { HeaderControlsContainer } from '../header-controls'

export const ProfileContainer = () => <div>
  <Header>
    <PageTitle title="Profile">
      <HeaderControlsContainer />
    </PageTitle>
  </Header>
  <Content>
    
  </Content>
</div>
