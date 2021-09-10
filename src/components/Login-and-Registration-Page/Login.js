import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import logo from "../../assets/logo.svg";
import LoginContainer from "./LoginContainer";
import URL_API from "../../services/URL_API";
import axios from "axios";
import LoginContext from "../../contexts/LoginContext";
import Loader from "react-loader-spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSendingLogin, setIsSending] = useState(false);
  const inputPlaceholder = [
    { title: "email", set: setEmail },
    { title: "senha", set: setPassword },
  ];
  const history = useHistory();
  const {setLoginInfos} = useContext(LoginContext);
  function sendLogin() {
      setIsSending(true);
      const body = {
          email: email,
          password: password,
        };
        axios
        .post(`${URL_API}/auth/login`, body)
        .then((res) => {
          setLoginInfos(res.data);
          setIsSending(false);
          history.push("/hoje");
      })
      .catch((error) => {
        console.log(error);
        setIsSending(false);
        alert("Erro! Verifique os dados e tente novamente");
      });
  }

  return (
    <LoginContainer>
      <img src={logo} alt="" />
      {inputPlaceholder.map((item, index) => (
        <input
          type={item.title === 'senha' ? 'password' : 'text'}
          placeholder={item.title}
          onChange={(e) => item.set(e.target.value)}
          key={index}
          disabled={isSendingLogin}
        />
      ))}
      <div onClick={sendLogin} className="button-enter">
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
          (<span>Entrar</span>) 
        }
      </div>
      <Link to="/cadastro" className="link-to-registration">
        Não tem uma conta? Cadastre!
      </Link>
    </LoginContainer>
  );
}
