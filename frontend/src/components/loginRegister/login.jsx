import{Bienvenido, Boton, Cajainpu, Checkbox, Contaimput, Forgot, Imgwanto, Input, Principal, Remenber, Wanto,Cajaaa} from "./styles/styledLogin";
import wanto from "../asset/Wanto.svg";
import{ useState } from "react";
import axios from "axios";


const Login = () => {
  const [ correo, setCorreo ] = useState( "" );
  const [ contraseña, setContraseña ] = useState( "");
  const log = async ( evt ) => {
    evt.preventDefault();
      try {
        await axios.post(
          "http://localhost:3005/login",
          {
            correo: correo,
            contraseña: contraseña
          }
        ).then(( response ) => {
          console.log( response );
          window.location.href = "http://localhost:5173/home";
        });
      } catch ( error ) {
        console.log( error );
        alert( "Usuario y/o contraseña no válidos" );
      }
  };


  return(
    <Principal>
      <Bienvenido><h1>¡Bienvenido!</h1></Bienvenido>
      <Wanto>
        <Imgwanto src={wanto}alt="wanto"></Imgwanto>
      </Wanto>
      <Contaimput>
        <Cajainpu>  
          <Input type="text" 
          onChange={(e) =>setCorreo(e.target.value)} 
          placeholder="Correo electronico"
          required/>
          
          <Input type="password"  
          onChange={(e) =>setContraseña(e.target.value)} 
          placeholder="Contraseña"
          required/>
          <Cajaaa>
            <Forgot/>
            <Forgot><h5>¿Forgot Password?</h5></Forgot>
          </Cajaaa>
          <Remenber>
            <Checkbox type="checkbox" />    
            <h6>Remenber Password</h6>
          </Remenber>
          <Boton onClick={log}><h2>Sign In</h2></Boton>
          <h6 style={{marginTop:"10px",cursor: "pointer"}}>¿don´t have account?</h6>
        </Cajainpu>
      </Contaimput>
    </Principal>
  )}

export default Login 