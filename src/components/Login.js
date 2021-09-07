import logo from "../assets/logo.svg"; 
import { Link } from "react-router-dom"
import styled from 'styled-components';
export default function Login() {
    return (
        <LoginContainer>
            <img src={logo} alt="" />
            <input type="text" placeholder="email"/> 
            <input type="text" placeholder="senha"/> 
            <Link to="/habitos" className="button-enter">
                <span>Entrar</span>
            </Link>
            <Link to="/cadastro" className="link-to-registration">Não tem uma conta? cadastre!</Link>
        </LoginContainer>
    )
}
const blueApp = '#52B6FF';
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 68px;
    
    img {
        width: 180px;
        height: 180px;
    }
    input,
    .button-enter {
        width: 80vw;
        height: 45px;
        font-size: 20px;
        margin-bottom: 6px;
    }
    input {
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding-left: 10px;
    }
    .button-enter {
        background-color: ${blueApp};
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
    .link-to-registration {
        margin-top: 24px;
        color: ${blueApp};
    }

`;