import{Bienvenido, Boton, Cajainpu,  Contaimput, Imgwanto, Input, Principal,  Wanto,} from "./styles/styledRegister"
import wanto from "../asset/Wanto.svg"

const Register = () => {
  return(
    <Principal>
      <Bienvenido><h1></h1></Bienvenido>
      <Wanto>
        <Imgwanto src={wanto}alt="wanto"></Imgwanto>
      </Wanto>

      <Contaimput>
        <Cajainpu>
          <Input type="text" placeholder="First Name"/>
          <Input type="text" placeholder="Last Name"/>
          <Input type="number" placeholder="Phone Number "/>
          <Input type="text" placeholder="Correo electronico"/>
          <Input type="password" placeholder="Contraseña"/>
          <Input type="password" placeholder="Contraseña"/>
          <Boton><h2>Sign Up</h2></Boton>
        </Cajainpu>
      </Contaimput>
    </Principal>
  )}

  export default Register