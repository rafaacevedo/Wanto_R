import{Bienvenido, Boton, Cajainpu, Imgwanto, Input, Principal,  Wanto,} from "./styles/styledRegister"
import wanto from "../asset/Wanto.svg"
import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

const Register = () => {
  const [ email, setEmail ] = useState( "" );
  const [ password, setPassword ] = useState("");
  const [name, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [number, setNumber] = useState("")

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
          <form >
            <p className="register">Register</p>
            <Input type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setFirstName(e.target.value)}
            required/>

            <Input type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required/>

            <Input type="number"
            placeholder="Phone Number"
            value={number}
            onRateChange={(e) => setNumber(e.target.value)}
            required/>

            <Input type="email"
            placeholder="Email address"
            value={email}
            onRateChange={(e) => setEmail(e.target.value)}
            required/>

            <Input type="password" 
            placeholder="Password"
            value={password}
            onRateChange={(e) => setPassword(e.target.value)}
            required/>

            <Input type="password"
            placeholder="confirm Password"
            required/>
            <Boton><h2>Sign Up</h2></Boton>
          </form>
        </Cajainpu>
      
    </Principal>
  )}

  export default Register