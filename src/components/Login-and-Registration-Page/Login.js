import logo from '../../assets/logo.svg'; 
import LoginContainer from './LoginContainer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputPlaceholder = [{title: 'email', set: setEmail}, {title: 'senha', set: setPassword}];
    return (
        <LoginContainer>
            <img src={logo} alt="" />
            {
                inputPlaceholder.map((item, index) => (
                    <input type="text" placeholder={item.title} onChange={e => item.set(e.target.value)} key={index} />
                ))
            }
            <Link to="/habitos" className="button-enter">
                <span>Entrar</span>
            </Link>
            <Link to="/cadastro" className="link-to-registration">Não tem uma conta? Cadastre!</Link>
        </LoginContainer>
    )
}