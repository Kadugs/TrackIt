import { BrowserRouter } from "react-router-dom";
import Routers from "./components/Routers.js";
import styled from "styled-components";
import Header from "./components/Header.js";

export default function App() {
  return (
      <BrowserRouter>
        <Header />
          <ContainerApp>
            <Routers />
          </ContainerApp>
      </BrowserRouter>
  )
}

const ContainerApp = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  margin-top: 70px;
`;