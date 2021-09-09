import styled from 'styled-components'

export default function Habit(props) {
    const {title, days} = props.item;
    const allDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return (
        <ContainerHabit>
            <p>{title}</p>
            <div className="week-days">
                {allDays.map((day, index) => (
                    <div key={index} className={days[index] === true ? 'day enabled' : 'day disabled'}>{day}</div>
                    ))}
            </div>
        </ContainerHabit>
    );
}

const ContainerHabit = styled.div`
    
    background-color: #fff;
    border-radius: 5px;
    padding: 13px 10px 15px 14px;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 20px;
    color: #666666;
    .week-days {
        display: flex;
        margin-top: 8px;
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
    .enabled {
        color: white;
        background-color: #d4d4d4;
    }
    .disabled {
        color: #d4d4d4;
    }
`;