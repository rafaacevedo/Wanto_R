import styled from "styled-components";

export const Principal = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
`

export const Header = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    box-shadow: 2px 0px 5px 0px grey;
    background-color: #fff;
    h1{
        font-size: 60px;
    }
`

export const Izquierda = styled.div`
    height: 100%;
    width: 18%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .menu{
        font-size: 50px;
        cursor: pointer;
        &:hover{
            color: #525151;
        }
    }
`