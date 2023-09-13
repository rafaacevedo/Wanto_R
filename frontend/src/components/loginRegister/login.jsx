import{Bienvenido, Boton, Cajainpu, Checkbox, Contaimput, Forgot, Imgwanto, Input, Principal, Remenber, Wanto,} from "./styles/styledLogin"
import wanto from "../asset/wanto_Mesa de trabajo 1.png"

const Login = () => {
  return(
    <Principal>
      <Bienvenido><h1>¡Bienvenido!</h1></Bienvenido>
      <Wanto>
        <Imgwanto src={wanto}alt="wanto"></Imgwanto>
      </Wanto>

      <Contaimput>
        <Cajainpu>
          <Input type="text" placeholder="Correo electronico"/>
          <Input type="password" placeholder="Contraseña"/>
          <Forgot><h5>¿Forgot Password?</h5></Forgot>
          <Remenber>
            <Checkbox type="checkbox"/>
            <h6>Remenber Password</h6>
          </Remenber>
          <Boton><h2>Login</h2></Boton>
          <h6 style={{marginTop:"10px",cursor: "pointer"}}>¿don´t have account?</h6>
        </Cajainpu>
      </Contaimput>
    </Principal>
  )}

export default Login 