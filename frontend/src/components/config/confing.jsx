import { Header, Izquierda, Principal } from "./styledConfig"
import { CgMenuRound } from "react-icons/cg"

const Config = () => {
  return ( 
    <Principal>
      <Header>
        <Izquierda>
          <CgMenuRound className="menu"/>
          <h1>Admin</h1>
        </Izquierda>
      </Header>
    </Principal>
  );

}

export default Config;