import styled from 'styled-components'

export const Number = styled.div`
    position: absolute;
    top: 5px;
    left: 5px;
`;

export const Day = styled.div`
    border: 1px solid #333333;
    padding: .2rem 1rem;
    text-align: center;
    width: 80px;
    height: 80px;
    position: relative;
    cursor:  ${props => props.type === 'date' ? "pointer" : "auto"};

    background: ${props => props.type === 'date' ? "#FFF" : "#CCC"};
`;

export default Day;