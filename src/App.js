import { BrowserRouter } from "react-router-dom";
import Routers from "./components/Routers.js";
import styled from "styled-components";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ContainerApp>
  )
}

const ContainerApp = styled.div`
  font-family: 'Lexend Deca', sans-serif;
`;