import styled from "styled-components";


export const Maincontainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
`

export const Header = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    background-color: #fff;
    border-bottom: 1px solid #2E3192;
    .volver{
        font-size: 40px;
        color: #1BC2FF;
        cursor: pointer;
    }
    .invisible{
        color: #fff;
    }
`

export const Tittle = styled.img`
    width: 70%;
    height: 100%;
    @media (max-width: 768px){
        height: 80%;
        width: 90%;
    }
`

export const ContainerInfoUser = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background-color: #fff;
`

export const InfoUser = styled.img`
    width: 8.5%;
    height: 60%;
    background-color: #fff;
    margin-bottom: 20px;
    @media (max-width: 750px){
        width: 30%;
        height: 60%;
    }
`

export const InfoName = styled.div`
    width: auto;
    height: 50%;
    flex-direction: column;
    display: flex;
    align-items: center;
    font-size: 15px;
    h2{
        color:#100;
    }
    h3{
        color:#1BC2FF;
    }
    background-color: #fff;
`   

export const ContainerMainUser = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top: 20px;
    background-color: #fff;
    `

export const ChangePassword = styled.button`
    height: 80px;
    width: 50%;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    cursor: pointer;
    border: none;
    border-bottom: 3px solid #1BC2FF;
    &:hover{
        border-bottom: 5px solid #1BC2FF;
    }
    h2{
        color:#100
    }
    background-color: #ffffff;
    .icono{
        font-size: 20px;
        margin-right: 10px;
        color: #1BC2FF;
    }
    @media (max-width: 768px){
        height: 60%;
        width: 80%;
    }
`