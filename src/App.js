import { BrowserRouter } from "react-router-dom";
import Routers from "./components/Routers.js";
import styled from "styled-components";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import SetLoginContext from "./contexts/SetLoginContext.js";
import LoginContext from "./contexts/LoginContext.js";
import { useState } from "react"
export default function App() {
  const [loginInfos, setLoginInfos] = useState({});
  const habits = [
    {
      title: 'aiaiai aiaiaiaiai',
      days: [false, true, true, false, false, true, false],
    },
    {
      title: 'aiaiai aiaiaiaiai',
      days: [false, true, true, false, false, true, false],
    },
  ]


  return (
    <SetLoginContext.Provider value={setLoginInfos}>
    <LoginContext.Provider value={loginInfos}>
      <BrowserRouter>
        <Header />
          <ContainerApp>
            <Routers 
              habits={habits}
              />
            <Footer />
          </ContainerApp>
      </BrowserRouter>
      </LoginContext.Provider>
      </SetLoginContext.Provider>
  )
}

const ContainerApp = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  margin-top: 70px;
`;