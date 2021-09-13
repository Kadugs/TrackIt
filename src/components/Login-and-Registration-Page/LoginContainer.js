import styled from 'styled-components';

const blueApp = '#52B6FF';
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 68px;
    
    img {
        width: 180px;
        height: 180px;
    }
    input,
    .button-enter {
        width: 80vw;
        height: 45px;
        font-size: 20px;
        margin-bottom: 6px;
        border-radius: 5px;
    }
    input {
        border: 1px solid #D4D4D4;
        padding-left: 10px;
    }
    .button-enter {
        background-color: ${props => props.bgColor};
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
    .link-to-registration {
        margin-top: 24px;
        color: ${blueApp};
    }
`;
export default LoginContainer;