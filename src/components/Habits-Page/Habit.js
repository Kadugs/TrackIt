import ContainerHabit from './ContainerHabit';
import trash from '../../assets/trash.svg';
import axios from 'axios'
import {useContext} from 'react';
import LoginContext from '../../contexts/LoginContext';
import URL_API from '../../services/URL_API'

export default function Habit(props) {
    const {loginInfos} = useContext(LoginContext);
    const {name, days, id} = props.item;
    const weekDays = [
        {weekDay: 'D', isSelected: false},
        {weekDay: 'S', isSelected: false},
        {weekDay: 'T', isSelected: false},
        {weekDay: 'Q', isSelected: false},
        {weekDay: 'Q', isSelected: false},
        {weekDay: 'S', isSelected: false},
        {weekDay: 'S', isSelected: false},
    ];
        days.map(item => {
            weekDays[item - 1].isSelected = true;
        })

        function deleteHabit() {
            const config = {
                headers: {
                    Authorization: `Bearer ${loginInfos.token}`,
                }
            }
            axios.delete(`${URL_API}/habits/${id}`, config)
             .catch(() => console.log('erro ao deletar!'))
        }

    return (
        <ContainerHabit>
            <p>{name}</p>
            <div className="week-days">
                {weekDays.map((day, index) => (
                    <div key={index} className={day.isSelected === true ? 'day enabled' : 'day disabled'}>{day.weekDay}</div>
                    ))}
            </div>
            <img src={trash} className="trash-icon" onClick={deleteHabit}/>
        </ContainerHabit>
    );
}