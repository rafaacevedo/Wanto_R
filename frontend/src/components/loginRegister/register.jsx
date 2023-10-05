import axios from "axios";
import swal from "sweetalert";
import {
  Bienvenido,
  Boton,
  Cajainpu,
  Imgwanto,
  Input,
  Principal,
  Wanto,
} from "./styles/styledRegister";
import wanto from "../asset/Wanto.svg";
import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import { VITE_url_Backend, VITE_url_fronten } from "../home/home";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    number: "",
  });

  const { email, password, name, lastname, number } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Eliminar espacios en blanco del valor ingresado
    const trimmedValue = value.trim();

    setFormData({
      ...formData,
      [name]: trimmedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !name || !lastname || !number) {
      swal({
        title: "Please fill out all fields",
        icon: "error",
        button: "Try again",
      });
      return;
    }

    try {
      const response = await axios.post(`${VITE_url_Backend}/register`, {
        correo: email,
        contraseña: password,
        nombre: name,
        apellido: lastname,
        telefono: number,
      });
      console.log(response.data);

      swal({
        title: "Successfully registered",
        icon: "success",
        button: "Back to login",
      }).then((confirm) => {
        if (confirm) {
          window.location.href = `${VITE_url_fronten}/login`;
        }
      });
    } catch (error) {
      console.error(error);
      swal({
        title: "Registration failed",
        text: "An error occurred while registering.",
        icon: "error",
        button: "OK",
      });
    }
  };

  const redirectToLogin = () => {
    window.location.href = `${VITE_url_fronten}/login`;
  };

  return (
    <Principal>
      <Bienvenido>
        <FiChevronLeft onClick={redirectToLogin} className="atras" />
      </Bienvenido>
      <Wanto>
        <Imgwanto src={wanto} alt="wanto" />
      </Wanto>
      <Cajainpu>
        <form>
          <Input
            type="text"
            name="name"
            placeholder="First Name"
            value={name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={number}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            required
          />
          <Boton onClick={handleSubmit}>
            <h2>Sign Up</h2>
          </Boton>
        </form>
      </Cajainpu>
    </Principal>
  );
};

export default Register;
