import React from 'react'
import { connect } from 'react-redux'
import { requestFetchVitals } from '../../../actions/vitals'
import { Section, SectionContent, SectionHeader } from '../../ui/section'
import { CardContainer } from '../../ui/card'
import { VitalsCard } from '../../fragments/vitals-card'

const mapStateToProps = ({ vitals }) => ({ vitals })
const mapDispatchToProps = { requestFetchVitals }

@connect(mapStateToProps, mapDispatchToProps)
export class VitalsContainer extends React.Component {

  componentDidMount() {
    this.props.requestFetchVitals(['height', 'weight', 'temperature', 'pulse', 'bloodPressure'])
  }

  render() {
    const { height = [], weight = [], temperature = [], pulse = [], bloodPressure = []} = this.props.vitals
    return <Section>
      <SectionHeader title="Vitals" />
      <SectionContent>
        <CardContainer>
          <VitalsCard name="Height" icon="arrowsV" data={height} />
          <VitalsCard name="Weight" icon="balanceScale" data={weight} />
          <VitalsCard name="Temperature" icon="thermometerHalf" data={temperature} />
          <VitalsCard name="Pulse" icon="heartbeat" data={pulse} />
          <VitalsCard name="Blood pressure" icon="barChart" data={bloodPressure} />
        </CardContainer>
      </SectionContent>
    </Section>
  }
}
