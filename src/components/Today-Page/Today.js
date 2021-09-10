import styled from 'styled-components'
import TodayHabit from './TodayHabit'
let colorPercentComplete = '#bababa';

export default function Today() {
    return (
        <ContainerToday>
            <p className="title-page">Segunda, 17/05</p>
            <p className="percent-complete">Nenhum hábito concluído ainda</p>
        </ContainerToday>
    );
}

const ContainerToday = styled.div`
    background-color: #e5e5e5;
    width: 100vw;
    min-height: 90vh;
    padding: 28px 5vw 0 5vw;

    .title-page {
        display: flex;
        justify-content: space-between;
        font-size: 29px;
        color: #126BA5;
    }
    .percent-complete {
        margin-top: 5px;
        color: ${colorPercentComplete};
        font-size: 18px;
    }
`;