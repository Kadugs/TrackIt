import styled from 'styled-components';
import Habit from './Habit';
import { useState } from 'react';
import CreateHabit from './CreateHabit';

export default function Habits() {
    const [isCreateHabitOpen, setIsCreateHabitOpen] = useState(false);
    return (
        <ContainerHabits>
            <div className="title-page">
                <span>Meus Hábitos</span>
                <div className="button-plus" onClick={() => setIsCreateHabitOpen(true)}>+</div>
            </div>

            <div>
                {isCreateHabitOpen ? (<CreateHabit />) : (<p></p>)}
                <p className="no-habits">
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p> 
                {/* {habits.length === 0 ? <p className="no-habits">
                    Você não tem nenhum hábito 
                    cadastrado ainda. Adicione um hábito 
                    para começar a trackear!
                    </p> 
                    : 
                    habits.map((item, index) => (
                        <Habit key={index} item={item} />
                    ))    
                    } */}
            </div>
        </ContainerHabits>
    )
}

const ContainerHabits = styled.div `
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
    .button-plus {
        background-color: #52B6FF;
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
