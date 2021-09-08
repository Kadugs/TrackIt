import styled from "styled-components";
import { useLocation } from "react-router";

export default function Footer() {
    const location = useLocation().pathname;
    if(location === '/' || location === '/cadastro') {
        return (
            <></>
        )
    }
    return(
        <ContainerFooter>
            <span>Hábitos</span>
            <div>
                <span>Hoje</span>
            </div>
            <span>Histórico</span>
        </ContainerFooter>
    );
}

const blueApp = '#52B6FF';
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
    color: ${blueApp};
    font-weight: bold;

    div {
        background-color: ${blueApp};
        width: 90px;
        height: 90px;
        border-radius: 50%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }
`;