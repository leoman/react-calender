import React, { PureComponent } from 'react';
import styled from 'styled-components';
import CalendarDay from '../../containers/CalendarDay';


export const Week = styled.div`
    display: flex;
`;

class CalendarWeek extends PureComponent {
    
  render () {
    const { week } = this.props;

    return (
        <Week>
            {week.map((day, i) => <CalendarDay day={day} key={day.index} />)}
        </Week>
    ) 
  }
}

export default CalendarWeek