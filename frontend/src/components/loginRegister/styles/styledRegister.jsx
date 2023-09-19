import styled from "styled-components";
import blanco from"../../asset/blanco.avif"

export const Principal = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${blanco});
  background-size: cover;
  background-repeat: no-repeat; 
  /* background-color: #ffee00; */
`;

export const Bienvenido = styled.section`
  background: rgb(0,212,255);
background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(36,32,119,1) 100%);
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 40px;
  .atras{
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
  }

  h1{
    color: #fff;
  }
`;

export const Wanto = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Imgwanto = styled.img`
width: 30%;
height: 80%;
@media (max-width: 768px){
    width: 60%;
  }
`;

export const Contaimput = styled.div`
  /* background-color:#000; */
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60%;
`;

export const Cajainpu = styled.div`
  background-color: #ffffff3b;
  box-shadow: 0px 0px 5px 5px #cecdcd88;
  display: flex;
  align-items: center;
 /*  justify-content:space-between; */
  padding: 1%;
  flex-direction: column;
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  border-radius: 20px;
  transition:all 1s ease-out; ;
  &:hover{
    box-shadow: 0px 0px 5px 5px #808080;
    transition: all 0.8s ease;
  }
  @media (max-width: 768px){
    width: 90%;
  }
  ::placeholder {
  color: #000;
}
`

export const Input = styled.input`
  width: 70%;
  height: 8%;
  border-radius: 7px;
  margin-top: 20px;
  border: 2px solid #00000036;
  outline-color: rgb(0,212,255);
  border-color: #242077;
  padding: 2px;
  &:hover{
    border-color: rgb(0,212,255);
  }
`;

export const Boton = styled.button`
  background-color: #242077;
  height: 10%;
  width: 50%;
  cursor: pointer;
  border-radius: 15px;
  margin-top: 40px;
  border: none; 
  H2{
    color: white;
    font-weight: 500;
    font-size:25px;
    margin-top: 5px;
  }
  &:hover{
    background-color: #26B2FB;
    transition: 1s;
  }
`

