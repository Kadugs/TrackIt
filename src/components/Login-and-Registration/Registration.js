import logo from '../../assets/logo.svg';
import LoginContainer from './LoginContainer';
import InputText from './InputText';
import { Link } from 'react-router-dom';

export default function Registration() {
    const inputPlaceholder = ['email', 'senha', 'nome', 'foto'];
    return (
        <LoginContainer>
            <img src={logo} alt="" />
            {
                inputPlaceholder.map(item => (
                    <InputText placeholder={item}/> 
                ))
            }
            <Link to="/habitos" className="button-enter">
                <span>Cadastrar</span>
            </Link>
            <Link to="/cadastro" className="link-to-registration">Já tem uma conta? Faça login!</Link>
        </LoginContainer>
    )
}