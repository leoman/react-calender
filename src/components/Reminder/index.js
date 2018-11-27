import React, { PureComponent } from 'react';
import { ReminderWrapper } from './styles';

class Reminder extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            reminder: props.reminder || ''
        }
    }

    onChange = event => {
        this.setState({reminder: event.target.value});
    }

    submit = () => {
        this.props.upsertReminder(this.props.index, this.state.reminder, this.props.reminderIndex);
        this.props.hideReminderForm();
    }

    render () {
        const { reminder } = this.state;
        const { showReminder } = this.props;
        return (
            <ReminderWrapper showReminder={showReminder}>
                <input type='text' value={reminder} onChange={this.onChange} />
                <button onClick={() => this.submit()}>Submit</button>
            </ReminderWrapper>
        )
    }
}

export default Reminder