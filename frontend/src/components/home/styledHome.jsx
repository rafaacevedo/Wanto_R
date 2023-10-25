import styled from "styled-components";
import blanco from "../asset/blanco.avif"


export const Principal = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(${blanco});
    background-size: cover;
    background-repeat: no-repeat; 
    background-color: #f2f3f5;
    .titulo{
        width: 98%;
        border-radius: 0;
        padding: 15px;
    }
`

export const Header = styled.div`
    height: 12%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border-bottom: 1px solid black;
    background-color: #fff;
    box-shadow: 2px 0px 5px 0px grey;
    position: fixed;
    h1{
        color: #201B6F;
        font-size: 70px;
    }
    .User{
        font-size: 40px;
        margin-left: 40px;
        color: transparent;
        cursor: auto;
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
            font-size: 35px;
        }
        .User{
            font-size: 35px;
        }
        .Log-out{
            font-size: 30px;
        }
    }
`

export const Invisible = styled.div`
    height: 7rem;
    width: 90%;
`

export const Contenedor = styled.div`
    height: 100%;
    width: 100%;
    margin: 20px;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
`

export const Cartas = styled.div`
    width: 20%;
    height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid grey;
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
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
        height: auto;
        width: 100%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .Carta_infor{
        height: auto;
        width: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    li{
        margin-left: 20px;
    }
    @media (min-width: 280px) and (max-height: 1000px) {
    width: 85%;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid grey;
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
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
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .Carta_infor{
        width: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column  ;
    }
    li{
        margin-left: 20px;
    }
}
@media (min-height: 100px){
    width: 85%;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid grey;
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
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
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .Carta_infor{
        width: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column  ;
    }
    li{
        margin-left: 20px;
    }
}
@media (min-width: 500px){
    width: 400px;
}
`

export const HeaderCartas = styled.div`
    height: 13;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
    border-bottom: 1px solid grey;
        h1{
            color: #201B6F;
            font-size: 40px;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
        }
`

export const ContenedorBotones = styled.div`
    width: 25%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0px 0px 70px;
    flex-wrap: wrap;
    
    svg{
        margin-bottom: 10px;
        font-size: 40px;
        cursor: pointer;
    }
    .Status{
        color: #068EEB;
        cursor: auto;
        &:hover{
            color: #068EEB;
        }
    }
    .Restart{
        color: #153A6F;
        &:hover{
            color: #2a5ea7;
        }
    }
    .Start{
        color: #5C8E24;
        font-size: 35px;
        &:hover{
            color: #80c234;
        }
    }
    .Stop{
        color: #BC6228;
        &:hover{
            color: #f08741;
        }
    }
    .Cloud-Init{
        color: #be1b09;
        transform: ${({rotate}) => (rotate ? 'rotate(0deg)' : 'rotate(180deg)')};
        color: ${({rotate}) => (rotate ? 'grey' : '#be1b09')};
    }
    .Reinstall{
        color: #708DA3;
        &:hover{
            color: #95bbd8;
        }
    }
    .Rescue{
        color: #475c7f;
        &:hover{
            color: #617eb1;
        }
    }
    .Snap-Shots{
        color: #767678;
        &:hover{
            color: #afafb8;
        }
    }
    .Arrow{
        color: #068EEB;
    }
    @media (min-width: 375px) and (max-height: 856px) {
    width: 25%;
    height: 50%;
    display: flex;
    align-content: center;
    justify-content: center;
    margin: auto;
    flex-wrap: wrap;
    }
`

export const Info = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    margin-top: -10px;
    h3{
        margin-left: 20px;
        margin-right: 10px;
        font-size: 20px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    p{
        font-family: Arial, Helvetica, sans-serif;
        color: #201B6F;
        font-weight: 900;
    }
    h2{
        font-weight: 600;
    }
    .botonesStatus{
        color: #068EEB;
    }
`

export const Iconos = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
`
