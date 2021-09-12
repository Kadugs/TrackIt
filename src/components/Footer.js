import styled from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

let percentage = 66;
export default function Footer() {
    const location = useLocation().pathname;
    if(location === '/' || location === '/cadastro') {
        return (
            <></>
        )
    }
    return(
        <ContainerFooter>
            <Link to="/habitos">
                <span>Hábitos</span>
            </Link>
            <Link to ="/hoje" className="button-today">
                <CircularProgressbar
                    value={percentage}
                    text='Hoje'
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "white",
                    pathColor: "white",
                    trailColor: "transparent"
                    })}
                />
            </Link>
            <Link to ="/historico">
                <span>Histórico</span>
            </Link>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div `
    z-index: 1;
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100vw;
    height: 70px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    font-size: 18px;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;

    .button-today {
        width: 90px;
        height: 90px;
        color: white;
        margin-bottom: 40px;
        text-decoration: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;