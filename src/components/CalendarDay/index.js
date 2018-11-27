import React, { Component } from 'react';
import { Day, Number } from './styles';
import Reminder from '../Reminder';

class CalendarDay extends Component {

    constructor() {
        super();
        this.state = {
            showReminder: false,
            reminder: '',
            reminderIndex: null,
        }
    }

    showReminderForm = () => {
        const { day: { type } } = this.props;
        const { showReminder } = this.state;
        if(type === 'date' && !showReminder) {
            this.setState({showReminder: true});
        }
    }

    hideReminderForm = () => {
        this.setState({
            showReminder: false,
            reminder: '',
            reminderIndex: null,
        })
    }

    editReminder = (reminder, reminderIndex) => {
        this.setState({
            reminder,
            reminderIndex
        })
    }

    deleteReminder = (event, index, key) => {
        event.preventDefault();
        event.stopPropagation();
        this.setState({showReminder: false});
        this.props.deleteReminder(index, key);
    }

    render () {

        const { day: { type, date = '', index, reminders = [] }, ...rest } = this.props;

        const { showReminder, reminder, reminderIndex } = this.state;

        return (
            <Day type={type} showReminder={showReminder} onClick={() => this.showReminderForm()}>
                <Number>{date}</Number>
        {showReminder && <Reminder showReminder={showReminder} hideReminderForm={this.hideReminderForm} index={index} reminder={reminder} reminderIndex={reminderIndex} {...rest} /> }
                {reminders.map((reminder, key) => 
                    <div key={key}>
                        <span onClick={() => this.editReminder(reminder, key)}>{reminder}</span> - 
                        <span onClick={(event) => this.deleteReminder(event, index, key)}>X</span>
                    </div>
                )}
            </Day>
        )
    }
}

export default CalendarDay