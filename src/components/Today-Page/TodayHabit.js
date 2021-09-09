import styled from 'styled-components';


export default function TodayHabit() {
    let check = false;
    return(
        <ContainerTodayHabit enabled={check} >
            <div className="habit-info">
                <p>aloaloa aloalo</p>
                <p>Sequência atual: <span className="sequence-days">aloalaoalo</span></p>
                <p>Seu recorde: <span>aloasdloa alao</span> </p>
            </div>
            <ion-icon name="checkbox" ></ion-icon>
        </ContainerTodayHabit>
    );
}
const ContainerTodayHabit = styled.div`   
    background-color: #fff;
    border-radius: 5px;
    padding: 13px 10px 15px 14px;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 20px;
    color: #666666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 94px;

    .habit-info :nth-child(1) {
        margin-bottom: 10px;
    }
    .habit-info :nth-child(2),
    .habit-info :nth-child(3) {
       font-size: 13px; 
    } 
   ion-icon {
        font-size: 70px;
        color: ${props => props.enabled ? '#8FC549' : '#EBEBEB'};
    }
`