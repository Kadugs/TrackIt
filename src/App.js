import { BrowserRouter } from "react-router-dom";
import Routers from "./components/Routers.js";
import styled from "styled-components";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
export default function App() {

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
      <BrowserRouter>
        <Header />
          <ContainerApp>
            <Routers 
              habits={habits}
            />
            <Footer />
          </ContainerApp>
      </BrowserRouter>
  )
}

const ContainerApp = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  margin-top: 70px;
`;