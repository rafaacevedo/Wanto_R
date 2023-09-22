import styled from "styled-components";

export const ContainerBody = styled.div`
    width: 450px;
    height: 85%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    .botones{
        height: auto;
        width: 85%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Containerimg = styled.img`
    width: 30%;
`;

export const Tittle1 = styled.img`
    width: 100%;
    height: 100%;
    @media (max-width: 768px){
        height: 80%;
        width: 90%;
    }
`

export const Tiltle = styled.div`
    height: 20%;
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1{
        font-size: 35px;
        color: #242077

    }
`;

export const FullName = styled.div`
    height: 10%;
    display: flex;
div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-size: 20px;
}
input {
    width: 70%;
    height: 50%;
    border-radius: 7px;
    border: 2px solid #00000036;
    outline-color: rgb(0, 212, 255);
    border-color: #242077;
    &:hover {
    border-color: rgb(0, 212, 255);
    }
}
`;

export const InforUser = styled.div`
    height: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;

.Inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    width: 100%;
    height: 35%;
}
input {
    width: 80%;
    height: 52%;
    border-radius: 7px;
    margin-top: 20px;
    border: 2px solid #00000036;
    outline-color: rgb(0, 212, 255);
    border-color: #242077;
    padding: 2px;
    &:hover {
        border-color: rgb(0, 212, 255);
    }
}
.label {
    display: flex;
    align-items: flex-start;
}
`;

export const ButtUser = styled.button`
    background-color: #242077;
    color: #fff;
    font-size: 18px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    margin-right: 10px;
    &:hover {
        background-color: rgb(0, 212, 255);
        color: #fff;
    }
`;