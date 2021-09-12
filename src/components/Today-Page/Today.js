import styled from 'styled-components'
import TodayHabit from './TodayHabit'
import { useEffect, useContext } from 'react';
import LoginContext from '../../contexts/LoginContext';
import axios from 'axios';
import URL_API from '../../services/URL_API'
export default function Today() {
    const {loginInfos} = useContext(LoginContext);    
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${loginInfos.token}`,
            }
        }
        axios.get(`${URL_API}/habits/today`, config)
         .then(res => console.log(res.data))
         .catch(err => console.error(err))
    })
    
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
    padding-bottom: 100px;

    .title-page {
        display: flex;
        justify-content: space-between;
        font-size: 29px;
        color: #126BA5;
    }
    .percent-complete {
        margin-top: 5px;
        color: #bababa;
        font-size: 18px;
    }
`;