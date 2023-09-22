/* eslint-disable no-constant-condition */
import { Maincontainer, Tittle, ContainerInfoUser,  InfoName, InfoUser, ContainerMainUser, ChangePassword, Header } from "./styledProfile";
import  Wanto                  from "../asset/Wanto.svg";
import  perfilfinal            from "../asset/perfilfinal.png";
import { BiSolidEdit }         from "react-icons/bi";
import {  RiLockPasswordLine } from "react-icons/ri";
import { RiDeleteBin5Line }    from "react-icons/ri";
import { TbLogout }            from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";
import swal from "sweetalert";


const Profile = () => {

    const ret = () => {
        try {
            (window.location.href ="http://localhost:5173/home");
        } catch (error) {
            alert(error)
        }
        }
        
    const edit = () => {
        try {
            window.location.href = "http://localhost:5173/editprofile";
        } catch (error) {
            alert(error);
        }
        };
    return (
        <Maincontainer>

            <Header>
                <FiChevronLeft onClick={ret} className="volver"/>
                <Tittle src={Wanto}alt="Wanto"/> 
                <FiChevronLeft className="invisible"/>
            </Header>

            <ContainerInfoUser> 
                <InfoUser src={perfilfinal} alt="perfilfinal"/> 
                <InfoName>
                    <h2>  Daniel Diaz </h2>
                    <h3> Daniel20@gmail.com </h3>
                </InfoName>
            </ContainerInfoUser>

            <ContainerMainUser>
                <ChangePassword onClick={edit}>
                    <BiSolidEdit className="icono"/><h2> Edit Profile </h2>
                </ChangePassword>
                <ChangePassword>
                    <RiLockPasswordLine className="icono"/><h2> Change Password </h2>
                </ChangePassword>
                <ChangePassword>
                    <RiDeleteBin5Line className="icono"/><h2> Delete Account </h2>
                </ChangePassword>
                <ChangePassword  onClick={() => {
                if (true) {
                swal({
                    title: "¿Seguro que quieres salir?",
                    buttons: true,
                }).then((confirm) => {
                    if (confirm) {
                    window.location.href = "http://localhost:5173/login";
                    }
                });
                }
            }} >
                    <TbLogout className="icono"/><h2> Logout </h2>
                </ChangePassword>
            </ContainerMainUser>
        </Maincontainer>
    );
};

export default Profile;


