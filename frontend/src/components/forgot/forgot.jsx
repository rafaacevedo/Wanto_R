import{Bienvenido, Principal,Wanto,Imgwanto, Contaimput, Cajainpu, Olvidado, Input, Botonol}from"./styledforgot"
import wanto from "../asset/Wanto.svg"
import { FiChevronLeft } from "react-icons/fi";

const Forgot = () =>{
  
const conex = () => {
    try {
        (window.location.href =VITE_url_fronten/login);
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
          <Olvidado><h4>¿Forgotten password?</h4></Olvidado>
          <Olvidado style={{marginLeft:"15px", height:"60px"}}>
          We will send you an email with a code to reset your password, enter the email address associated with your account.
          </Olvidado>
          <Input type="text" placeholder="Email"/>
          <Botonol><h2>Sign In</h2></Botonol>
        </Cajainpu>
      </Contaimput>
    </Principal>
  )
}
export default Forgot