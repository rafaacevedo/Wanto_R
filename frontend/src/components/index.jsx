import { Route, Routes, } from "react-router-dom"
import Login from "./loginRegister/login"
import Register from "./loginRegister/register"
import Home from "./home/home"
import Config from "./config/confing"

const Main = () =>{
  return(
    <div>
      <Routes>
        <Route path="*" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/config" element={<Config/>}/>
      </Routes>
    </div>
  )
}
export default Main