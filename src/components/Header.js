import { useLocation } from 'react-router';
import styled from 'styled-components';
import LoginContext from '../contexts/LoginContext';
import { useContext } from 'react';

export default function Header() {
    const {loginInfos} = useContext(LoginContext);
    const location = useLocation().pathname;
    if(location === '/' || location === '/cadastro') {
        return (
            <></>
        )
    }
    return (
        <HeaderContainer>
            <span>TrackIt</span>
            <img src={loginInfos.image} alt="" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    font-family: 'Playball', cursive;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #126BA5;
    width: 100vw;
    height: 70px;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 40px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

`;