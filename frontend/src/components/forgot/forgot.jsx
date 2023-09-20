import{Bienvenido, Principal,Wanto,Imgwanto, Contaimput, Cajainpu, Olvidado, Input, Botonol}from"./styledforgot"
import wanto from "../asset/Wanto.svg"
import { FiChevronLeft } from "react-icons/fi";

const Forgot = () =>{
  
const conex = () => {
    try {
        (window.location.href ="http://localhost:5173/login");
    } catch (error) {
        alert(error)
    }
    }
  return(
    <Principal>
      <Bienvenido><FiChevronLeft onClick={conex} className="atras"/></Bienvenido>
      <Wanto>
        <Imgwanto src={wanto}alt="wanto"></Imgwanto>
      </Wanto>
      <Contaimput>
        <Cajainpu>
          <Olvidado><h4>¿Has olvidado la contraseña?</h4></Olvidado>
          <Olvidado style={{marginLeft:"15px", height:"60px"}}>
            Le enviaremos un correo electrónico con un codigo para restablecer su contraseña, ingrese el correo electronico asociado con su cuenta. 
          </Olvidado>
          <Input type="text" placeholder="Correo electronico"/>
          <Botonol><h2>Sign In</h2></Botonol>
        </Cajainpu>
      </Contaimput>
    </Principal>
  )
}
export default Forgot