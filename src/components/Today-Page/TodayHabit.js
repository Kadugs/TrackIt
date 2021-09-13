import styled from 'styled-components';
import {IoIosCheckbox} from 'react-icons/io';
import axios from 'axios';
import URL_API from '../../services/URL_API'
import LoginContext from '../../contexts/LoginContext'
import {useContext} from 'react';

export default function TodayHabit(props) {
    const {id, name, done, currentSequence, highestSequence} = props.habit;
    const {loginInfos} = useContext(LoginContext);
    const config = {
        headers: {
            Authorization: `Bearer ${loginInfos.token}`,
        }
    }
    function habitDone() {
        console.log(config);
        axios.post(`${URL_API}/habits/${id}/${done ? 'uncheck' : 'check'}`, id, config)
         .then(() => props.renderTodayHabits())
         .catch(err => console.log(err));
    }

    return(
        <ContainerTodayHabit enabled={done} record={currentSequence === highestSequence && currentSequence !== 0}>
            <div className="habit-info">
                <p>{name}</p>
                <p>Sequência atual: <span className="current-sequence">
                    {currentSequence} {currentSequence === 1 ? 'dia' : 'dias'}
                    </span>
                </p>
                <p>Seu recorde: <span className="highest-sequence">
                    {highestSequence} {highestSequence === 1 ? 'dia' : 'dias'}
                    </span>
                </p>
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
    .current-sequence {
        color: ${props => props.enabled ? '#8FC549' : '#666666'};
    }
    .highest-sequence {
        color: ${props => props.record ? '#8FC549' : '#666666'}
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