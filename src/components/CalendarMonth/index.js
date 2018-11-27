import React, { PureComponent } from 'react';
import CalendarWeek from '../CalendarWeek';
import { DaysOfTheWeek, Day } from './styles';

class CalendarMonth extends PureComponent {
  render () {

    const { month } = this.props;

    let week = 0;
    const weeks = month.reduce((acc, next, i) => {
        if(i !== 0 && i % 7 === 0) {
            acc.push([]);
            week++;
        }
        acc[week].push(next)
        return acc;
    }, [[]]);

    return (
      <div>
            <DaysOfTheWeek>
                <Day>Sunday</Day>
                <Day>Monday</Day>
                <Day>Tuesday</Day>
                <Day>Wednesday</Day>
                <Day>Thursday</Day>
                <Day>Friday</Day>
                <Day>Saturday</Day>
            </DaysOfTheWeek>
            {weeks.map((week, i) => <CalendarWeek week={week} key={i} />)}
      </div>
    )
  }
}

export default CalendarMonth