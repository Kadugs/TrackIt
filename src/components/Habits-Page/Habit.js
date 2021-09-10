import ContainerHabit from './ContainerHabit';

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