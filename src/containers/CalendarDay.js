import { connect } from 'react-redux'
import {
    upsertReminder,
    deleteReminder
} from '../actions/calendar';

import CalendarDay from '../components/CalendarDay'

const mapDispatchToProps = dispatch => ({
    upsertReminder: (dayIndex, reminder, reminderIndex) => dispatch(upsertReminder(dayIndex, reminder, reminderIndex)),
    deleteReminder: (dayIndex, reminderIndex) => dispatch(deleteReminder(dayIndex, reminderIndex))
})

export default connect(
  null,
  mapDispatchToProps
)(CalendarDay)