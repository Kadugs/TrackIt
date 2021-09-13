import ContainerHabit from './ContainerHabit'
import { useState, useContext } from "react";
import URL_API from '../../services/URL_API'
import LoginContext from '../../contexts/LoginContext'
import axios from 'axios'
import Loader from "react-loader-spinner";
import styled from 'styled-components';

export default function CreateHabit(
    {
        setIsCreateHabitOpen, 
        renderHabits, 
        habitName, 
        setHabitName, 
        selectedDays, 
        setSelectedDays
    }) {
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [isSendingHabit, setIsSendingHabit] = useState(false);
    const { loginInfos } = useContext(LoginContext);
    function sendHabit() {
        setIsSendingHabit(true);
        const config = {
            headers: {
                Authorization: `Bearer ${loginInfos.token}`,
            }
        }
        const body ={
            name: habitName,
            days: selectedDays,
        }
        if(habitName.length !== 0 && selectedDays.length !== 0) {
            axios.post(`${URL_API}/habits`, body, config)
            .then( () => {
                setIsCreateHabitOpen(false);
                setHabitName("");
                setSelectedDays([]);
                setIsSendingHabit(false);
                renderHabits();
            })
            .catch( () => {
                alert("Erro! Tente novamente");
                setIsSendingHabit(false);
            })
        } else {
            alert("Por favor, preencha todos os campos");
        }
    }

    return (
        <ContainerHabit>
            <input 
                value={habitName}
                type="text" 
                placeholder="nome do hábito" 
                onChange={(e) => setHabitName(e.target.value)}
                disabled={isSendingHabit}
            />
            <div className="week-days">
                {weekDays.map((day, index) => (
                    <div 
                        key={index} 
                        onClick={isSendingHabit ? 
                            undefined 
                            : 
                            () => setSelectedDays([...selectedDays, index])}
                        className={selectedDays.includes(index) ? 'day enabled' : 'day disabled'}>{day}
                    </div>
                    ))}
            </div>
                <Buttons  bgColor={isSendingHabit ? '#86CCFF' : '#52B6FF'} className="buttons-create-habit">
                    <div className="cancel-habit"onClick={() => setIsCreateHabitOpen(false)} >Cancelar</div>
                    <div className="create-habit" onClick={sendHabit}>
                    {
                        isSendingHabit ? 
                        (<Loader
                            type="ThreeDots"
                            color="#ffffff"
                            height={40}
                            width={60}
                            timeout={3000}
                        />)
                        : 
                        (<span>Salvar</span>) 
                    }
                    </div>
                </Buttons>
        </ContainerHabit>
    );
}

const Buttons = styled.div `
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 29px;
    
    .cancel-habit {
        font-size: 16px;
        color: #52B6FF;
        cursor: pointer;
    }
    .create-habit {
        font-size: 16px;
        background-color: ${props => props.bgColor};
        color: white;
        border-radius: 5px;
        width: 84px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 23px;
        cursor: pointer;
    }
`