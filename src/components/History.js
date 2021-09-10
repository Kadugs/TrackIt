import styled from "styled-components"

export default function History() {
    return (
        <ContainerHistory>
            <div className="title-page">
                <span>Histórico</span>
            </div>

            <div>
            <p className="no-history">
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </p> 
            </div>
        </ContainerHistory>
    )
}

const ContainerHistory = styled.div`
    background-color: #e5e5e5;
    width: 100vw;
    min-height: 90vh;
    padding: 28px 5vw 0 5vw;

    .title-page {
        display: flex;
        justify-content: space-between;
        font-size: 29px;
        color: #126BA5;
    }
    .no-history {
        font-size: 18px;
        color: #666666;
        margin-top: 28px;
    }
`
