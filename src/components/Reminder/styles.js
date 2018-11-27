import styled from 'styled-components'

export const ReminderWrapper = styled.div`
    display: ${props => props.showReminder  ? "block" : "none"}; 
`;

export default ReminderWrapper;