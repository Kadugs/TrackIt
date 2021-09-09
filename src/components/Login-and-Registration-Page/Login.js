import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import logo from "../../assets/logo.svg";
import LoginContainer from "./LoginContainer";
import URL_API from "../../services/URL_API";
import axios from "axios";
import SetLoginContext from "../../contexts/SetLoginContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputPlaceholder = [
    { title: "email", set: setEmail },
    { title: "senha", set: setPassword },
  ];
  const history = useHistory();
  const context = useContext(SetLoginContext);

  function sendLogin() {
      const body = {
          email: email,
          password: password,
        };
        axios
        .post(`${URL_API}/auth/login`, body)
        .then((res) => {
         context(res.data);
         history.push("/hoje");
      })
      .catch((error) => {
        console.log(error);
        alert("Erro! Verifique os dados e tente novamente");
      });
  }

  return (
    <LoginContainer>
      <img src={logo} alt="" />
      {inputPlaceholder.map((item, index) => (
        <input
          type="text"
          placeholder={item.title}
          onChange={(e) => item.set(e.target.value)}
          key={index}
        />
      ))}
      <div onClick={sendLogin} className="button-enter">
        <span>Entrar</span>
      </div>
      <Link to="/cadastro" className="link-to-registration">
        Não tem uma conta? Cadastre!
      </Link>
    </LoginContainer>
  );
}
