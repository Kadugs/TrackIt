import styled from 'styled-components';
import {IoIosCheckbox} from 'react-icons/io';
import axios from 'axios';
import URL_API from '../../services/URL_API'
import LoginContext from '../../contexts/LoginContext'
import {useContext} from 'react';

export default function TodayHabit(props) {
    const {id, name, done, currentSequence, highestSequence} = props.habit;
    const {loginInfos} = useContext(LoginContext);
    function habitDone() {
        const config = {
            headers: {
                Authorization: `Bearer ${loginInfos.token}`,
            }
        }
            axios.post(`${URL_API}/habits/${id}/${done ? 'uncheck' : 'check'}`, config)
             .then(res => console.log(res))
             .catch(err => console.error(err))
    }

    return(
        <ContainerTodayHabit enabled={done} >
            <div className="habit-info">
                <p>{name}</p>
                <p>Sequência atual: <span className="sequence-days">{currentSequence}</span></p>
                <p>Seu recorde: <span>{highestSequence}</span> </p>
            </div>
            <IoIosCheckbox className="check-box" onClick={habitDone}/>
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
   .check-box {
        font-size: 70px;
        color: ${props => props.enabled ? '#8FC549' : '#EBEBEB'};
    }
`