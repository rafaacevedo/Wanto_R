import { Header, Maincontainer } from "../styledProfile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerBody,
  Tittle1,
  Tiltle,
  FullName,
  InforUser,
  Containerimg,
  ButtUser,
  InfoUserContainer,
} from "./styledEdit_profile";
import Wanto from "../../asset/Wanto.svg";
import Perfilfinal from "../../asset/perfilfinal.png";
import { FiChevronLeft } from "react-icons/fi";
import { VITE_url_fronten, VITE_url_Backend } from "../../home/home";
import axios from "axios";
import swal from "sweetalert";

const Editprofile = () => {
  const [, setLoading] = useState(true);
  const [firstName, setFirtsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const Act = async (e) => {
    e.preventDefault();

    // Verificar si alguno de los campos tiene espacios en blanco
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      telefono.trim() === ""
    ) {
      swal({
        title: "Por favor, complete todos los campos",
        icon: "error",
        button: "Intentar de nuevo",
      });
      return;
    }

    try {
      const req = await axios.patch(
        `${VITE_url_Backend}/editProfile`,
        {
          correo: email,
          nombre: firstName,
          apellido: lastName,
          telefono: telefono,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );
      if (e) {
        swal({
          title:
            "¡Datos Actualizados! Es necesario volver a iniciar sesión",
          buttons: "Volver a iniciar sesión",
        }).then((confirm) => {
          if (confirm) {
            window.location.href = `${VITE_url_fronten}/login`;
          }
        });
      }
      console.log(req);
    } catch (error) {
      console.log(error);
      alert("Usuario no encontrado");
    }
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLoading(false);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ret = () => {
    try {
      window.location.href = `${VITE_url_fronten}/profile`;
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Maincontainer style={{ display: "flex", alignItems: "center" }}>
      <Header>
        <FiChevronLeft onClick={ret} className="volver" />
        <Tittle1 src={Wanto} alt="Wanto" />
        <FiChevronLeft className="invisible" />
      </Header>
      <ContainerBody>
        <InfoUserContainer>
          <Tiltle>
            <Containerimg src={Perfilfinal} alt="perfilfinal" />
          </Tiltle>

          <FullName>
            <div>
              <input
                type="text"
                placeholder="First_Name"
                onChange={(e) => setFirtsName(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Last_Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </FullName>

          <InforUser>
            <div className="Inputs">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Inputs">
              <input
                type="text"
                placeholder="Contact_Number"
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </InforUser>
          <div className="botones">
            <ButtUser onClick={Act}>Guardar</ButtUser>
            <ButtUser onClick={ret}>Cancelar</ButtUser>
          </div>
        </InfoUserContainer>
      </ContainerBody>
    </Maincontainer>
  );
};

export default Editprofile;
