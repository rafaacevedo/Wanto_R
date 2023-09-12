import styled from "styled-components";

export const Principal = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: #f30c0c; */
`;

export const Bienvenido = styled.section`
  background: rgb(0,212,255);
background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(36,32,119,1) 100%);
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;

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
`;

export const Contaimput = styled.div`
  /* background-color:#000; */
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

export const Cajainpu = styled.div`
  background-color: #ffffff3b;
  box-shadow: 0px 0px 5px 0px #0000008b;
  display: flex;
  align-items: center;
 /*  justify-content:space-between; */
  padding: 1%;
  flex-direction: column;
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  border-radius: 20px;
`

export const Input = styled.input`
  width: 70%;
  height: 7%;
  border-radius: 7px;
  margin-top: 20px;
  border: 2px solid #00000036;
  outline-color: rgb(0,212,255);
  border-color: grey;
  &:hover{
    border-color: rgb(0,212,255);
  }
`;

export const Forgot = styled.div`
/* background-color: red; */
  width: 71%;
  height: 5%;
  margin-top: 5px;
  cursor: pointer;
  h5{
    color: #000;
    display: flex;
    justify-content: right;
    font-size: 10px;
    font-weight: 600
  }
`
export const Remenber = styled.div`
 /*  background-color: red; */
  width: 71%;
  height: 5%;
  margin-top: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  H6{
    font-weight: 600
  }
`
export const Checkbox = styled.input`
  /* background-color: #00ffaa; */
  width: 10%;
  height: 70%;
`;

export const Boton = styled.button`
  background-color: rgb(0,212,255);
  height: 10%;
  width: 50%;
  cursor: pointer;
  border-radius: 15px;
  /* margin-top: 20px; */
  border: none;
  H2{
    color: white;
    font-weight: 500
  }
  &:hover{
    background-color: rgb(32, 163, 189);
    transition: 100ms;
  }
`

