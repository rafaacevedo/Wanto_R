import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { VITE_url_Backend } from "../home/home";


const HomeClient = () => {
  const [maquina, setMaquina] = useState(null);
  const token = localStorage.getItem('accessToken');
  const decodedToken = jwt_decode(token);
  const idUsuario = decodedToken.id_usuario;
  console.log("id usuario:", idUsuario);

  useEffect(() => {
    const obtenerMaquinaPorUsuario = async () => {
      try {
        const response = await axios.get(`${VITE_url_Backend}/maquina/${idUsuario}`);
        setMaquina(response.data);
        console.log("Objeto de la maquina frontend:", response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerMaquinaPorUsuario();
  }, [idUsuario]);

  if (!maquina) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Información de la máquina</h1>
      <p>ID de la máquina: {maquina.id_maquina}</p>
    </div>
  );
};

export default HomeClient;