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
                inputPlaceholder.map((item, index) => (
                    <InputText placeholder={item} key={index} /> 
                ))
            }
            <Link to="/habitos" className="button-enter">
                <span>Cadastrar</span>
            </Link>
            <Link to="/" className="link-to-registration">Já tem uma conta? Faça login!</Link>
        </LoginContainer>
    )
}