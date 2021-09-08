import styled from 'styled-components'
import Habit from './Habit'
export default function Habits({ habits }) {
    return (
        <ContainerHabits>
            <div className="my-habits">
                <span>Meus Hábitos</span>
                <div className="button-plus">+</div>
            </div>

            <div>
                {habits.length === 0 ? <p className="no-habits">
                    Você não tem nenhum hábito 
                    cadastrado ainda. Adicione um hábito 
                    para começar a trackear!
                    </p> 
                    : 
                    habits.map((item, index) => (
                        <Habit key={index} item={item} />
                    ))    
                    }
            </div>
        </ContainerHabits>
    )
}

const blueApp = '#52B6FF';
const ContainerHabits = styled.div `
    background-color: #e5e5e5;
    width: 100vw;
    min-height: 90vh;
    padding: 28px 5vw 0 5vw;

    .my-habits {
        display: flex;
        justify-content: space-between;
        font-size: 29px;
        color: #126BA5;
    }
    .button-plus {
        background-color: ${blueApp};
        width: 40px;
        height: 35px;
        padding-bottom: 4px;
        border-radius: 5px;
        font-size: 27px;
        text-decoration: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .no-habits {
        font-size: 18px;
        color: #666666;
        margin-top: 28px;
    }
`;
