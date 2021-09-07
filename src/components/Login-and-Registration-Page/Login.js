import logo from '../../assets/logo.svg'; 
import LoginContainer from './LoginContainer';
import InputText from './InputText';
import { Link } from 'react-router-dom';

export default function Login() {
    const inputPlaceholder = ['email', 'senha'];
    return (
        <LoginContainer>
            <img src={logo} alt="" />
            {
                inputPlaceholder.map((item, index) => (
                    <InputText placeholder={item} key={index} /> 
                ))
            }
            <Link to="/habitos" className="button-enter">
                <span>Entrar</span>
            </Link>
            <Link to="/cadastro" className="link-to-registration">Não tem uma conta? Cadastre!</Link>
        </LoginContainer>
    )
}