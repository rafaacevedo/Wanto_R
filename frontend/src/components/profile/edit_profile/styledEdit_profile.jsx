import styled from "styled-components";

export const ContainerBody = styled.div`
    width: 500px;
    height: 80%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media ( max-width: 768px ){
        width: 90%;
    }
`;

export const InfoUserContainer = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid grey;
    background-color: rgba(0,0,0,0.04) ;
    .botones{
        display: flex;
        justify-content: space-around;
        width: 50%;
        @media ( max-width: 768px ){
        width: 60%;
    }
    }
`

export const Containerimg = styled.img`
    width: 50%;
    margin-top: -80px;
`;

export const Tittle1 = styled.img`
    width: 100%;
    height: 100%;
    @media ( max-width: 768px ){
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
    justify-content: space-between;
    width: 80%;
    
div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 48%;
    height: 100%;
    font-size: 20px;
}
input {
    width: 100%;
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
    width: 100px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    &:hover {
        background-color: rgb(0, 212, 255);
        color: #fff;
    }
`;