import { Route, Routes, } from "react-router-dom"
import Login from "./loginRegister/login"
import Register from "./loginRegister/register"
import Home from "./home/home"
import Config from "./config/confing"
import Profile from "./profile/profile"


const Main = () =>{
  return(
    <div>
      <Routes>
        <Route path="*" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/config" element={<Config/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  )
}
export default Main