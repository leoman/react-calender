import React, { PureComponent } from 'react'
import CalendarWrapper from './styles';
import CalendarMonth from '../../containers/CalendarMonth';

class Calendar extends PureComponent {
  render () {
    return (
      <CalendarWrapper>
        <CalendarMonth />
      </CalendarWrapper>
    )
  }
}

export default Calendar