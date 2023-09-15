import styled from "styled-components";


export const Principal = styled.div`
    height: 100%;
    width: 99.2vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f2f3f5;
    .titulo{
        width: 98%;
        border-radius: 0;
        padding: 15px;
    }
`

export const Header = styled.div`
    height: 12%;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    background-color: #fff;
    box-shadow: 2px 0px 5px 0px grey;
    position: fixed;
    h1{
        color: #201B6F;
        font-size: 60px;
        cursor: pointer;
    }
    .User{
        font-size: 40px;
        margin-left: 40px;
        color: #1BC2FF;
        cursor: pointer;
        &:hover{
            color: #201B6F;
        }
    }
    .Log-out{
        font-size: 35px;
        margin-right: 40px;
        color: #1BC2FF;
        cursor: pointer;
        &:hover{
            color: #201B6F;
        }
    }
    @media (max-width: 768px){
        h1{
            font-size: 30px;
        }
        .User{
            font-size: 30px;
        }
        .Log-out{
            font-size: 25px;
        }
    }
`

export const Invisible = styled.div`
    height: 15%;
    width: 90%;
    margin-bottom: 100px;
`

export const Contenedor = styled.div`
    height: 83%;
    width: 95%;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const Cartas = styled.div`
    height: 60vh;
    width: 45vh;
    margin: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid grey;
    h1{
        margin-left: 80px;
    }
    .pc{
        margin-top: 40px;
        font-size: 200px;
        color: silver;
    }
    h2{
        margin: 30px 0px 20px 20px;
    }
    .info{
        margin-top: 10px;
    }
    li{
        margin-left: 20px;
    }
    @media (max-width: 768px){
        
    }
`

export const HeaderCartas = styled.div`
    height: 13%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
    border-bottom: 1px solid grey;
    .menu{
        color: #1BC2FF;
        font-size: 35px;
        cursor: pointer;
        &:hover{
            color: #201B6F;
        }
    }
`

export const ContenedorBotones = styled.div`
    width: 25%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0px 0px 70px;
    flex-wrap: wrap;
    svg{
        margin-bottom: 10px;
        font-size: 40px;
        &:hover{
            color: #201B6F;
        }
        cursor: pointer;
    }
    .Status{
        color: #068EEB;
    }
    .Restart{
        color: #153A6F;
    }
    .Start{
        color: #5C8E24;
        font-size: 35px;
    }
    .Stop{
        color: #BC6228;
    }
    .Cloud-Init{
        color: #D4584A;
    }
    .Reinstall{
        color: #708DA3;
    }
    .Rescue{
        color: #475c7f;
    }
    .Snap-Shots{
        color: #767678;
    }
    .Arrow{
        color: #068EEB;
    }
`

export const Info = styled.div`
    height: auto;
    width: 100%;
    justify-content: space-between;
    display: flex;
`

export const Iconos = styled.div`
    height: auto;
    width: 100%;
    justify-content: space-between;
    display: flex;
`