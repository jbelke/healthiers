import React from 'react'
import last from 'mini-dash/last'
import isDefined from 'mini-dash/isDefined'
import { autobind } from 'core-decorators'
import { connect } from 'react-redux'

import { updateLocalVitalsCard } from '../../../actions/vitals-card'
import { requestedAddVitals } from '../../../actions/vitals'
import { VitalsCard } from '../../fragments/vitals-card'

const mapStateToProps = ({ vitalsCards, vitals }) => ({ vitalsCards, vitals })
const actionCreators = { updateLocalVitalsCard, requestedAddVitals }

const DEFAULT_UNITS = {
  height: 'CENTIMETRES',
  weight: 'KILOGRAMMS',
  temperature: 'CELSIUS',
  pulse: 'BEATS_PER_MINUTE',
  bloodPressure: 'MILLIMETER_OF_MERCURY'
}

@connect(mapStateToProps, actionCreators)
export class VitalsCardContainer extends React.Component {

  @autobind() valueChange(value) {
    const {vitalsKey} = this.props
    this.props.updateLocalVitalsCard({ type: vitalsKey, value })
  }

  @autobind() valueCommit(value) {
    const {vitalsKey} = this.props
    this.props.updateLocalVitalsCard({ type: vitalsKey, value: null })
    this.props.requestedAddVitals(vitalsKey, { value, unit: DEFAULT_UNITS[vitalsKey] }) // TODO
  }

  render() {
    const {valueChange, valueCommit} = this

    const {vitalsCards, vitals} = this.props
    const {vitalsKey, name, icon} = this.props

    const data = isDefined(vitals[vitalsKey]) ? vitals[vitalsKey] : []
    const {unit, value} = last(data) || {}
    const latest = {
      unit: unit || DEFAULT_UNITS[vitalsKey],
      value: vitalsCards[vitalsKey] || value || ''
    }

    return <VitalsCard
      data={data}
      name={name}
      icon={icon}
      latest={latest}
      valueChange={valueChange}
      valueCommit={valueCommit} />
  }
}
