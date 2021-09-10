import styled from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
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
                <span>Hoje</span>
            </Link>
            <span>Histórico</span>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div `
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
        background-color: #52B6FF;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        text-decoration: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;