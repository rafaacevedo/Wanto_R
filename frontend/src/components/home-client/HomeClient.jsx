import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { VITE_url_Backend } from "../home/home";

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
  

  useEffect(() => {
  if (idUsuario) {
    obtenerMaquinaPorUsuario(idUsuario); 
  }
}, [idUsuario]);



  if (!machine) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Información de la máquina</h1>
      <p>ID de la máquina: {machine.id_maquina}</p>
      <p>Instancia: {machine.instancia}</p>
    </div>
  );
};

export default HomeClient;
