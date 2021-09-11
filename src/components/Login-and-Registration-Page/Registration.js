import logo from '../../assets/logo.svg';
import LoginContainer from './LoginContainer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import URL_API from '../../services/URL_API'
import axios from 'axios';
import { useHistory } from 'react-router';
import Loader from "react-loader-spinner"


export default function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [isSendingLogin, setIsSendingLogin] = useState(false);

    const inputPlaceholder = [
        {title: 'email', set: setEmail}, 
        {title: 'senha', set: setPassword},
        {title: 'nome', set: setName}, 
        {title: 'foto', set: setImage} 
    ];

    const history = useHistory();
    function sendRegistration() {
        setIsSendingLogin(true);
        const body = {
            email: email,
            name: name,
            image: image,
            password: password,
        }

        axios.post(`${URL_API}/auth/sign-up`, body)
         .then(() => {
            setIsSendingLogin(false);
            history.push('/')
            })
         .catch(() => {
            setIsSendingLogin(false);
             alert("Erro! Verifique os dados e tente novamente");
            })
    }

    return (
        <LoginContainer bgColor={isSendingLogin ? '#86CCFF' : '#52B6FF'}>
            <img src={logo} alt="" />
            {
                inputPlaceholder.map((item, index) => (
                    <input 
                        type={item.title === 'senha' ? 'password' : 'text'}
                        placeholder={item.title} 
                        onChange={e => item.set(e.target.value)} 
                        key={index} disabled={isSendingLogin}
                    />
                ))
            }
            <div onClick={sendRegistration} className="button-enter">
            {
                isSendingLogin ? 
                (<Loader
                    type="ThreeDots"
                    color="#ffffff"
                    height={80}
                    width={100}
                    timeout={3000}
                />)
                : 
                (<span>Cadastrar</span>) 
            }
            </div>
            <Link to="/" className="link-to-registration">Já tem uma conta? Faça login!</Link>
        </LoginContainer>
    )
}