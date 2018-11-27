import { connect } from 'react-redux'

import CalendarMonth from '../components/CalendarMonth'

const mapStateToProps = state => ({
  month: state.calendar.month
})

export default connect(
  mapStateToProps,
  null
)(CalendarMonth)