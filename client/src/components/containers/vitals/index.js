import React from 'react'
import { connect } from 'react-redux'
import { requestFetchVitals } from '../../../actions/vitals'
import { Section, SectionContent, SectionHeader } from '../../ui/section'
import { CardContainer } from '../../ui/card'
import { VitalsCardContainer } from '../vitals-card'

const mapStateToProps = ({ vitals }) => ({ vitals })
const mapDispatchToProps = { requestFetchVitals }

@connect(mapStateToProps, mapDispatchToProps)
export class VitalsContainer extends React.Component {

  componentDidMount() {
    this.props.requestFetchVitals(['height', 'weight', 'temperature', 'pulse', 'bloodPressure'])
  }

  render() {
    return <Section>
      <SectionHeader title="Vitals" />
      <SectionContent>
        <CardContainer>
          <VitalsCardContainer name="Height" icon="arrowsV" vitalsKey='height' />
          <VitalsCardContainer name="Weight" icon="balanceScale" vitalsKey='weight' />
          <VitalsCardContainer name="Temperature" icon="thermometerHalf" vitalsKey='temperature' />
          <VitalsCardContainer name="Pulse" icon="heartbeat" vitalsKey='pulse' />
          <VitalsCardContainer name="Blood pressure" icon="barChart" vitalsKey='bloodPressure' />
        </CardContainer>
      </SectionContent>
    </Section>
  }
}
