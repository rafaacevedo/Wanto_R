import{Bienvenido, Boton, Cajainpu, Imgwanto, Input, Principal,  Wanto,} from "./styles/styledRegister"
import wanto from "../asset/Wanto.svg"
import { FiChevronLeft } from "react-icons/fi";

const Register = () => {
    const cone = () => {
        try {
            (window.location.href ="http://localhost:5173/login");
        } catch (error) {
            alert(error)
    }
  }
  return(
    <Principal>
      <Bienvenido><FiChevronLeft onClick={cone} className="atras"/></Bienvenido>
      <Wanto>
        <Imgwanto src={wanto}alt="wanto"></Imgwanto>
      </Wanto>
        <Cajainpu>
          <form action="">
            <p className="register">Register</p>
            <Input type="text" placeholder="First Name"/>
            <Input type="text" placeholder="Last Name"/>
            <Input type="number" placeholder="Phone Number "/>
            <Input type="text" placeholder="Email address"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="confirm Password"/>
            <Boton><h2>Sign Up</h2></Boton>
          </form>
        </Cajainpu>
      
    </Principal>
  )}

  export default Register