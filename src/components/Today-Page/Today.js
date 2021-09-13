import styled from 'styled-components'
import TodayHabit from './TodayHabit'
import { useEffect, useContext, useState } from 'react';
import LoginContext from '../../contexts/LoginContext';
import PercentContext from '../../contexts/PercentContext';
import axios from 'axios';
import URL_API from '../../services/URL_API'
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs';

export default function Today() {
    dayjs.locale('pt-br');
    const {loginInfos} = useContext(LoginContext);    
    const [todayHabits, setTodayHabits] = useState([]);
    const { setPercent } = useContext(PercentContext);
    const config = {
        headers: {
            Authorization: `Bearer ${loginInfos.token}`,
        }
    }
    function dailyPercentCompleted() {
        if(todayHabits.length === 0) return 0;
        let counter = 0;
        todayHabits.map((item) => {
            if(item.done) counter++;
        })
        const percent = counter / todayHabits.length * 100;
        setPercent(percent);

        return percent
    }
    function renderTodayHabits() {
        axios.get(`${URL_API}/habits/today`, config)
        .then(res => setTodayHabits(res.data))
        .catch(err => console.error(err))
    }
    useEffect(() => {
        renderTodayHabits();
    }, [])
    return (
        <ContainerToday enabled={dailyPercentCompleted() !== 0}>
            <p className="title-page">{dayjs().format('dddd, DD/MM ')}</p>
            <p className="percent-complete">
                {
                    dailyPercentCompleted() === 0 ? 
                    'Nenhum hábito concluído ainda' 
                    : 
                    `${dailyPercentCompleted().toFixed()}% dos hábitos concluídos`
                }
            </p>
            {todayHabits.map(habit => (
                <TodayHabit key={habit.id} habit={habit} renderTodayHabits={renderTodayHabits} />
            ))}
        </ContainerToday>
    );
}

const ContainerToday = styled.div`
    background-color: #e5e5e5;
    width: 100vw;
    min-height: 90vh;
    padding: 28px 5vw 0 5vw;
    padding-bottom: 100px;

    .title-page {
        display: flex;
        justify-content: space-between;
        font-size: 29px;
        color: #126BA5;
    }
    .percent-complete {
        margin-top: 5px;
        color: ${props => props.enabled ? '#8FC549' : '#bababa'};
        font-size: 18px;
    }
`;