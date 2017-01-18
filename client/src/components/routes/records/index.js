import React from 'react'
import { VitalsContainer } from '../../containers/vitals'
import { Content } from '../../ui/content'
import { Header } from '../../ui/header'
import { PageTitle } from '../../ui/header/page-title'
import { HeaderControlsContainer } from '../../containers/header-controls'

export const RecordsRoute = () => <div>
  <Header>
    <PageTitle title="Records">
      <HeaderControlsContainer />
    </PageTitle>
  </Header>
  <Content>
    <VitalsContainer />
  </Content>
</div>
