/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { VITE_url_Backend, VITE_url_fronten } from "../home/home";
import { Cartas, Container, ContenedorBotones, Header, HeaderCartas, Iconos, Info, Invisible, Principal } from './StyledHomeClients';
import {BiSolidUserCircle} from 'react-icons/bi'
import {SlLogout} from 'react-icons/sl'
import swal from "sweetalert";
import { Spinner } from 'reactstrap';
import { BsDisplay } from "react-icons/bs";
import { RiRestartFill } from "react-icons/ri";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiStop } from "react-icons/hi";
import { BsToggle2Off } from "react-icons/bs";
import { RiInstallFill } from "react-icons/ri";
import { PiComputerTowerFill } from "react-icons/pi";



const HomeClient = () => {
  const [data, setData] = useState([]);
  const [/* error */, setError] = useState();

  const [, setLoading] = useState(true);

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

async function fetchData() {
  try {
    const response = await axios.get(`${VITE_url_Backend}/api/data`);

    if (Array.isArray(response.data.data)) {
      // Verifica si los datos son un array
      setData(response.data.data);  
    } else {
      // Los datos no son un array válido, maneja este caso según tus necesidades
      setError("Los datos no son un array válido");
    }

    setLoading(false);
  } catch (error) {
    setError(error.message);
    setLoading(false);
  }
}

useEffect(() => {
  fetchData();

  setInterval(() => {
    fetchData();
  }, 1000);


}, [setLoading, setError]);



const [status, setStatus] = useState('');

const handleStopButtonClick = async (status) => {
  if (status === "stopped") {
    return "Error"
  }
  else {
  try {
    const response = await axios.post(`${VITE_url_Backend}/api/stop`);
    setStatus('Máquina detenida con éxito.');
  } catch (error) {
        setStatus('La maquina ya está detenida.');
        setError(error)
        console.error(error);
      }
  }
};

const handleStartButtonClick = async (status) => {
  if (status === "running") {
    return "Error"
  }
  else {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.post(`${VITE_url_Backend}/api/start`);
        setStatus('Máquina encendida con éxito.');
      } catch (error) {
        setStatus('La maquina ya está encendida.');
        setError(error)
        console.error(error);
      }  
  }
};

const handleRestartButtonClick = async () => {
  try {
    const response = await axios.post(`${VITE_url_Backend}/api/restart`);
    setStatus('Máquina reiniciada con éxito.');
  } catch (error) {
    setStatus('Error al reiniciar la máquina.');
    setError(error)
    console.error(error);
  }
};

const handleshutdowntButtonClick = async () => {
  if (status === "stopped") {
    return "Error"
  }
  else {
  try {
    const response = await axios.post(`${VITE_url_Backend}/api/shutdown`);
    setStatus('Apagando la maquina.');
    setRotate(!rotate)
  } catch (error) {
    setStatus('La maquina ya está apagada');
    setError(error)
    console.error(error);
  }
  }
};


const [rotate, setRotate] = useState(false)

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
          {data.length > 0 ? (
          <>
            {data.map((instance) => (
              <Cartas key={instance.instanceId}>
                <HeaderCartas>

                    <div key={instance.instanceId} className="titulo">
                      <h1 className="titulo">{instance.ipConfig.v4.ip}</h1>
                    </div>

                </HeaderCartas>
                <Iconos>
                  <ContenedorBotones rotate = {rotate}>
                    
                    <BsDisplay className="Status" title= {instance.status} style={instance.status === "running" ? { fill: "#068EEB" } : { fill: "grey" }} />

                    <BsFillPlayCircleFill className="Start" title='Start' onClick={() => handleStartButtonClick(instance.status)} />

                    <RiRestartFill className="Restart" title='Restart' onClick={handleRestartButtonClick}/>
                    
                    <HiStop className="Stop" title='Stop' onClick={() => handleStopButtonClick(instance.status)} />
                    
                    <BsToggle2Off className="Cloud-Init" title='Cloud-Init' onClick={() => handleshutdowntButtonClick(instance.status)}/>
                    
                    <RiInstallFill className="Reinstall" title='Reinstall' onClick={() => {
                      // eslint-disable-next-line no-constant-condition
                      if (true) {
                        swal({
                          title: "Button disabled for now",
                          icon: "error",
                          button: "Return",
                        }).then((confirm) => {
                          if (confirm) {
                            window.location.href = `${VITE_url_fronten}/homeclient`;
                          }
                        });
                      }
                    }}/>
                  
                  </ContenedorBotones>
                    <PiComputerTowerFill className="pc" style={instance.status === "running" ? { fill: "#5C8E24" } : { fill: "grey" }} />
                    
                </Iconos>
                <Info>
                    <div key={instance.instanceId} className="info">
                      <h2>Información:</h2>
                      <Info>
                        <h3>Nombre: </h3>
                        <p>{instance.name}</p>
                      </Info>
                      <Info>
                        <h3>OsType: </h3>
                        <p>{instance.osType}</p>
                      </Info>
                      <Info>
                        <h3>Instancia Id: </h3>
                        <p>{instance.instanceId}</p>
                      </Info>
                      <Info>
                        <h3>Region: </h3>
                        <p>{instance.regionName}</p>
                      </Info>
                      <Info>
                        <h3>RamMb: </h3>
                        <p>{instance.ramMb}</p>
                      </Info>
                      <Info>
                        <h3>Instancia Ip: </h3>
                        <p>{instance.ipConfig.v4.ip}</p>
                      </Info>
                      <Info>
                        <h3>Status: </h3>
                        <p>{instance.status}</p>
                      </Info>
                      <Info>
                        <h3 className='botonesStatus' style={status.includes("está") ? { color: "red" } : { color: "#247e8e" }} >{status}</h3>
                      </Info>
                    </div>
                  
                </Info>
              </Cartas>
            ))}
          </>
        ) : (
          <>
            <div className="loading">
              <Spinner className="spinner" />
            </div>
          </>
        )}
            {/* <div>
              <h1>Información de la máquina</h1>
              <p>ID de la máquina: {machine.id_maquina}</p>
              <p>Instancia: {machine.instancia}</p>
            </div> */}
          </Container>
    </Principal>
  );
};

export default HomeClient;