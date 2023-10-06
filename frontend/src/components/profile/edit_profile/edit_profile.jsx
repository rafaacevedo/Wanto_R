import { Header, Maincontainer } from "../styledProfile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {ContainerBody,Tittle1,Tiltle,FullName,InforUser,Containerimg,ButtUser,InfoUserContainer,} from "./styledEdit_profile";
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Verificar si el valor incluye la tecla de espacio y evitar su ingreso
    if (value.includes(" ")) {
      return;
    }

    switch (name) {
      case "firstName":
        setFirtsName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "telefono":
        setTelefono(value);
        break;
      default:
        break;
    }
  };

  const Act = async (e) => {
    e.preventDefault();

    // Verificar si alguno de los campos está vacío
    if (!firstName || !lastName || !email || !telefono) {
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
      if (req) {
        swal({
          title: "¡Datos Actualizados!, ¡Es necesario volver a iniciar sesión!",
          buttons: "Volver a iniciar sesión",
        }).then((confirm) => {
          if (confirm) {
            window.location.href = `${VITE_url_fronten}/login`;
          }
        });
      }
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
                name="firstName"
                placeholder="First_Name"
                value={firstName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last_Name"
                value={lastName}
                onChange={handleInputChange}
              />
            </div>
          </FullName>

          <InforUser>
            <div className="Inputs">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="Inputs">
              <input
                type="text"
                name="telefono"
                placeholder="Contact_Number"
                value={telefono}
                onChange={handleInputChange}
              />
            </div>
          </InforUser>
          <div className="botones">
            <ButtUser onClick={Act}>Save</ButtUser>
            <ButtUser onClick={ret}>Cancel </ButtUser>
          </div>
        </InfoUserContainer>
      </ContainerBody>
    </Maincontainer>
  );
};

export default Editprofile;
