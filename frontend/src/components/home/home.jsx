import axios from "axios";
import {Cartas,Contenedor,ContenedorBotones,Header,HeaderCartas,Iconos,Info,Invisible,Principal,} from "./styledHome";
import { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { SlLogout } from "react-icons/sl";
import { CgMenuRound } from "react-icons/cg";
import { BsDisplay } from "react-icons/bs";
import { RiRestartFill } from "react-icons/ri";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiStop } from "react-icons/hi";
import { BsToggle2Off } from "react-icons/bs";
import { RiInstallFill } from "react-icons/ri";
import { IoIosSave } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { PiComputerTowerFill } from "react-icons/pi";




const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/data");

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
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  return (
    <Principal>
      <Header>
        <BiSolidUserCircle className="User" />
        <h1>Control-Vps</h1>
        <SlLogout className="Log-out" />
      </Header>
      <Invisible />
      <Contenedor>
        {data.map((instance) => (
          <Cartas key={instance.instanceId}>
          <HeaderCartas>
            {data.map((instance) => (
              <div key={instance.instanceId}>
                <h1>{instance.ipConfig.v4.ip}</h1>
              </div>
            ))}
            <CgMenuRound className="menu" />
          </HeaderCartas>
          <Iconos>
            <ContenedorBotones>
              <BsDisplay className="Status" />
              <BsFillPlayCircleFill className="Start" />
              <RiRestartFill className="Restart" />
              <HiStop className="Stop" />
              <BsToggle2Off className="Cloud-Init" />
              <RiInstallFill className="Reinstall" />
              <IoIosSave className="Rescue" />
              <FaHistory className="Snap-Shots" />
            </ContenedorBotones>
            <PiComputerTowerFill className="pc" />
          </Iconos>
          <Info>
            {data.map((instance) => (
              <div key={instance.instanceId} className="info">
                <h2>Información:</h2>
                <li>{instance.name}</li>
                <li>{instance.instanceId}</li>
                <li>{instance.osType}</li>
                <li>{instance.regionName}</li>
                <li>{instance.ramMb}</li>
                <li>{instance.region}</li>
                <li>{instance.ipConfig.v4.ip}</li>
              </div>
            ))}
          </Info>
        </Cartas>
        ))}
      </Contenedor>
    </Principal>
  );
};

export default Home;
