import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About=()=>{
   return (
    <>
        <h1>About Us Page</h1>
        {""}
        <p>This is Namaste React Live Course</p> 
        <Profile name={"Bhaskar"}/>
    </>
   )
}

export default About;