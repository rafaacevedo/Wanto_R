import styled from "styled-components";

export const Principal = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 70px;
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