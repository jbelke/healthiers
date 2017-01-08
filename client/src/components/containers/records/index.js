import React from 'react'
import { VitalsContainer } from '../vitals'
import { Content } from '../../ui/content'
import { Header } from '../../ui/header'
import { PageTitle } from '../../ui/header/page-title'
import { HeaderControlsContainer } from '../header-controls'

export const RecordsContainer = () => <div>
  <Header>
    <PageTitle title="Records">
      <HeaderControlsContainer />
    </PageTitle>
  </Header>
  <Content>
    <VitalsContainer />
  </Content>
</div>
