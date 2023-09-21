import { Header, Maincontainer} from "../styledProfile";
import {ContainerBody, Tittle1 , Tiltle, FullName, InforUser, Containerimg, ButtUser} from "../edit_profile/styledEdit_profile";
import  Wanto  from "../../asset/Wanto.svg";
import  Perfilfinal  from "../../asset/perfilfinal.png";
import { AiOutlineArrowLeft } from "react-icons/ai";

const editprofile = () => {

const ret = () => {
    try {
        window.location.href = "http://localhost:5173/profile";
    } catch (error) {
        alert(error);
    }
    };
    return (
        <Maincontainer style={{ display: "flex", alignItems: "center" }}>
        <Header>
            <AiOutlineArrowLeft onClick={ret} className="volver" />
            <Tittle1 src={Wanto} alt="Wanto" />
            <AiOutlineArrowLeft className="invisible" />
            <AiOutlineArrowLeft className="invisible"/>
        </Header>
        <ContainerBody>
            <Tiltle>
            <h1> Edit Profile </h1>
            <Containerimg src={Perfilfinal} alt="perfilfinal" />
            </Tiltle>

            <FullName>
            <div>
                <label> First Name</label>
                <input type="text" placeholder="First Name" />
            </div>

            <div>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
            </div>
            </FullName>

            <InforUser>
            <div className="Inputs">
                <div>
                <label>Email</label>
                </div>
                <input type="text" placeholder="Email" />
            </div>
            <div className="Inputs">
                <label>Contact Number</label>
                <input type="text" placeholder="Contact Number" />
            </div>
            <div className="Inputs">
                <label> Password </label>
                <input type="text" placeholder="Password" />
            </div>
            </InforUser>
            <div className="botones">
                <ButtUser>Save</ButtUser>
                <ButtUser onClick={ret}>Cancel </ButtUser>
            </div>
        </ContainerBody>
        </Maincontainer>
    );
};

export default editprofile;