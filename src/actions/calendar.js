
export const ADD_REMINDER = 'ADD_REMINDER';
export const EDIT_REMINDER = 'EDIT_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';

export const upsertReminder = (dayIndex, reminder, reminderIndex) => {
    
    const type = (reminderIndex !== null) ? EDIT_REMINDER : ADD_REMINDER

    return {
        type,
        payload: { dayIndex, reminderIndex, reminder }
    }
}

export const deleteReminder = (dayIndex, reminderIndex) => ({
  type: DELETE_REMINDER,
  payload: { dayIndex, reminderIndex }
})