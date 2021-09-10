import { BrowserRouter } from "react-router-dom";
import Routers from "./components/Routers.js";
import styled from "styled-components";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import LoginContext from "./contexts/LoginContext.js";
import { useState } from "react";
export default function App() {
  const [loginInfos, setLoginInfos] = useState({});
  return (
    <LoginContext.Provider value={{loginInfos, setLoginInfos}}>
      <BrowserRouter>
        <Header />
          <ContainerApp>
            <Routers />
            <Footer />
          </ContainerApp>
      </BrowserRouter>
      </LoginContext.Provider>
  )
}

const ContainerApp = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  margin-top: 70px;
`;