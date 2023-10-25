import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { VITE_url_Backend, VITE_url_fronten } from "../home/home";
import { Container, Header, Invisible, Principal } from './StyledHomeClients';
import {BiSolidUserCircle} from 'react-icons/bi'
import {SlLogout} from 'react-icons/sl'
import swal from "sweetalert";



const HomeClient = () => {
  const [machine, setMachine] = useState(null);

  const token = localStorage.getItem('accessToken');

  const decodedToken = jwt_decode(token);
  const idUsuario = decodedToken.id_usuario;
  console.log('Datos enviados al backend:', idUsuario);

  const obtenerMaquinaPorUsuario = async (idUsuario) => {
    try {
      const response = await axios.get(`${VITE_url_Backend}/maquina/${idUsuario}`);
      console.log('Response del frontend:', response);
      setMachine(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const ret = () => {
    try {
      window.location.href = `${VITE_url_fronten}/profile`;
    } catch (error) {
      alert(error);
    }
  };
  

  useEffect(() => {
  if (idUsuario) {
    obtenerMaquinaPorUsuario(idUsuario); 
  }
}, [idUsuario]);

if (!machine) {
    return(
    <Principal>
      <Header><BiSolidUserCircle onClick={ret} className="User" />
        <h1>Control-Vps</h1>
        <SlLogout
          onClick={() => {
            // eslint-disable-next-line no-constant-condition
            if (true) {
              swal({
                title: "¿Seguro que quieres salir?",
                buttons: true,
              }).then((confirm) => {
                if (confirm) {
                  localStorage.removeItem("accessToken");
                  window.location.href = `${VITE_url_fronten}/login`;
                }
              });
            }
          }}
          className="Log-out"/>
          </Header>
        <Invisible/>
        <Container>
          <h1>No se han encontrado Maquinas...</h1>
        </Container>
      </Principal>
  )}

  return (
    <Principal>
      <Header><BiSolidUserCircle onClick={ret} className="User" />
        <h1>Control-Vps</h1>
        <SlLogout
          onClick={() => {
            // eslint-disable-next-line no-constant-condition
            if (true) {
              swal({
                title: "¿Seguro que quieres salir?",
                buttons: true,
              }).then((confirm) => {
                if (confirm) {
                  localStorage.removeItem("accessToken");
                  window.location.href = `${VITE_url_fronten}/login`;
                }
              });
            }
          }}
          className="Log-out"/>
      </Header>
          <Invisible/>
          <Container>
            <div>
              <h1>Información de la máquina</h1>
              <p>ID de la máquina: {machine.id_maquina}</p>
              <p>Instancia: {machine.instancia}</p>
            </div>
          </Container>
    </Principal>
  );
};

export default HomeClient;