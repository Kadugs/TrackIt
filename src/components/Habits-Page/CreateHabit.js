import ContainerHabit from './ContainerHabit'
import { useState } from "react";

export default function CreateHabit() {
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [selectedDays, setSelectedDays] = useState([]);
    const [habitName, setHabitName] = useState("");
    return (
        <ContainerHabit>
            <input type="text" placeholder="nome do hábito" onChange={(e) => setHabitName(e.target.value)}/>
            <div className="week-days">
                {weekDays.map((day, index) => (
                    <div key={index} onClick={() => setSelectedDays([...selectedDays, index + 1])}
                        className={selectedDays.includes(index + 1) ? 'day enabled' : 'day disabled'}>{day}</div>
                    ))}
            </div>
            <div>
                <div onClick={() => {}} >Cancelar</div>
                <div onClick={() => {}} >Salvar</div>
            </div>
        </ContainerHabit>
    );
}