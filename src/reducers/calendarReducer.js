import moment from 'moment';
import {
    ADD_REMINDER,
    EDIT_REMINDER,
    DELETE_REMINDER
} from '../actions/calendar';

const generateMonth = () => {
    const daysOfMonth = moment().daysInMonth();

    let month = [];

    const padding = moment().date(1).weekday();

    for (let i=0; i < padding; i++) {
        month.push({
            index: i,
            type: 'blank'
        })
    }

    for (let i=0; i < daysOfMonth; i++) {
        const date = moment().date(i + 1);
        
        month.push({
            name: date.format('dddd'),
            reminders: [],
            date: i + 1,
            index: i + padding,
            type: 'date'
        })
        
    }

    return month;

}

const initialState = {
    month: generateMonth()
}

function calendarReducer (state = initialState, action) {
    switch (action.type) {

        case ADD_REMINDER: {
            
            const month = state.month.map((day, i) => {
                if(i === action.payload.dayIndex) {
                    day.reminders.push(action.payload.reminder);
                }
                return day;
            })

            return {
                ...state,
                month
            }
        }

        case EDIT_REMINDER: {
            const month = state.month.map((day, i) => {
                if(i === action.payload.dayIndex) {
                    day.reminders.splice(action.payload.reminderIndex, 1, action.payload.reminder);
                }
                return day;
            })

            return {
                ...state,
                month
            }
        }

        case DELETE_REMINDER: {
            const month = state.month.map((day, i) => {
                if(i === action.payload.dayIndex) {
                    day.reminders.splice(action.payload.reminderIndex, 1);
                }
                return day;
            })

            return {
                ...state,
                month
            }
        }

        default:
            return state
    }
}

export default calendarReducer