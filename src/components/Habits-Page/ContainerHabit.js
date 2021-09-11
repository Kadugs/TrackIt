import styled from 'styled-components'

const ContainerHabit = styled.div`    
background-color: #fff;
border-radius: 5px;
padding: 13px 10px 15px 14px;
margin-bottom: 10px;
margin-top: 20px;
font-size: 20px;
color: #666666;

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
.buttons-create-habit {
    display: flex;
    align-items: center;
}
.cancel-habit {
    font-size: 16px;
    color: #52B6FF;
}
.create-habit {
    font-size: 16px;
    background-color: #52B6FF;
    color: white;
    border-radius: 5px;
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 16px 16px 23px;
}
`;
export default ContainerHabit;