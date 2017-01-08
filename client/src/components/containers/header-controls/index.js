import React from 'react'
import { connect } from 'react-redux'
import { HeaderControls } from '../../fragments/header-controls'
import { requestedFetchProfile } from '../../../actions/profile'

const mapStateToProps = ({ profile }) => ({ profile })
const mapDispatchToProps = { requestedFetchProfile }

@connect(mapStateToProps, mapDispatchToProps)
export class HeaderControlsContainer extends React.Component {

  componentDidMount() {
    this.props.requestedFetchProfile(['firstName', 'lastName'])
  }

  render() {
    const {firstName, lastName} = this.props.profile
    const name = firstName && lastName ? `${firstName} ${lastName}` : 'Awaiting name...'
    return <HeaderControls link='/dashboard/profile' name={name} />
  }
}
