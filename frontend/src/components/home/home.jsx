import axios from 'axios';
import "../../index.css";
import { Cartas, Contenedor, ContenedorBotones, Header, HeaderCartas, Iconos, Info, Invisible, Principal, } from "./styledHome";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { SlLogout } from "react-icons/sl";
import { BsDisplay } from "react-icons/bs";
import { RiRestartFill } from "react-icons/ri";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiStop } from "react-icons/hi";
import { BsToggle2Off } from "react-icons/bs";
import { RiInstallFill } from "react-icons/ri";
import { IoIosSave } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { PiComputerTowerFill } from "react-icons/pi";
import swal from "sweetalert";



export const VITE_url_fronten = import.meta.env.VITE_url_fronten
export const VITE_url_Backend = import.meta.env.VITE_url_Backend

const Home = () => {
  const [data, setData] = useState([]);
  const [/* error,  */, setError] = useState(null);

  const [, setLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLoading(false);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${VITE_url_Backend}/api/data`);

        if (Array.isArray(response.data.data)) {
          // Verifica si los datos son un array
          setData(response.data.data);
          console.log(response.data.data);
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
    fetchData();

  }, [setLoading, setError]);

  const ret = () => {
    try {
      window.location.href = `${VITE_url_fronten}/profile`;
    } catch (error) {
      alert(error);
    }
  };

  const [status, setStatus] = useState('');

  const handleStopButtonClick = async () => {
    try {
      const response = await axios.post(`${VITE_url_Backend}/api/stop`);
      setStatus('Máquina detenida con éxito.');
      console.log(response.data);
    } catch (error) {
      setStatus('Error al detener la máquina.');
      console.error(error);
    }
  };

  const handleStartButtonClick = async () => {
    try {
      const response = await axios.post(`${VITE_url_Backend}/api/start`);
      setStatus('Máquina detenida con éxito.');
      console.log(response.data);
    } catch (error) {
      setStatus('Error al detener la máquina.');
      console.error(error);
    }
  };

  const handleRestartButtonClick = async () => {
    try {
      const response = await axios.post(`${VITE_url_Backend}/api/restart`);
      setStatus('Máquina detenida con éxito.');
      console.log(response.data);
    } catch (error) {
      setStatus('Error al detener la máquina.');
      console.error(error);
    }
  };
  
  const handleshutdowntButtonClick = async () => {
    try {
      const response = await axios.post(`${VITE_url_Backend}/api/shutdown`);
      setStatus('Máquina detenida con éxito.');
      console.log(response.data);
    } catch (error) {
      setStatus('Error al detener la máquina.');
      console.error(error);
    }
  };

  return (
    <Principal>
      <Header>
        <BiSolidUserCircle onClick={ret} className="User" />
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
          className="Log-out"
        />
      </Header>
      <Invisible />
      <Contenedor>
        {data.length > 0 ? (
          <>
            {data.map((instance) => (
              <Cartas key={instance.instanceId}>
                <HeaderCartas>
                  {data.map((instance) => (
                    <div key={instance.instanceId} className="titulo">
                      <h1 className="titulo">{instance.ipConfig.v4.ip}</h1>
                    </div>
                  ))}
                </HeaderCartas>
                <Iconos>
                  <ContenedorBotones>
                    <BsDisplay className="Status" style={instance.status === "running" ? { fill: "#068EEB" } : { fill: "grey" }} />
                    <BsFillPlayCircleFill className="Start" onClick={handleStartButtonClick} />
                    <RiRestartFill className="Restart" onClick={handleRestartButtonClick}/>
                    <HiStop className="Stop" onClick={handleStopButtonClick} />
                    <BsToggle2Off className="Cloud-Init" onClick={handleshutdowntButtonClick}/>
                    <RiInstallFill className="Reinstall" />
                    <IoIosSave className="Rescue" />
                    <FaHistory className="Snap-Shots" />
                  </ContenedorBotones>
                    <PiComputerTowerFill className="pc" style={instance.status === "running" ? { fill: "#5C8E24" } : { fill: "grey" }} />
                    <p>{status}</p>
                </Iconos>
                <Info>
                  {data.map((instance) => (
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
                    </div>
                  ))}
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
      </Contenedor>
    </Principal>
  );
};

export default Home;
