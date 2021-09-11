import styled from 'styled-components'

const ContainerHabit = styled.div`    
    background-color: #fff;
    border-radius: 5px;
    padding: 13px 10px 15px 14px;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 20px;
    color: #666666;
    padding: 20px;
    position: relative;

    input {
        width: 100%;
        height: 45px;
        border: 1px solid #d4d4d4;
        font-size: 20px;
        padding-left: 11px;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
    }
    input::placeholder {
        color: #d4d4d4;
    }
    .day {
        width: 30px;
        height: 30px;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        font-size: 20px;
        margin-right: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .week-days {
        display: flex;
        margin-top: 8px;
    }
    .enabled {
        color: white;
        background-color: #d4d4d4;
    }
    .disabled {
        color: #d4d4d4;
    }
    .trash-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 13px;
        height: 15px;
    }
`;
export default ContainerHabit;