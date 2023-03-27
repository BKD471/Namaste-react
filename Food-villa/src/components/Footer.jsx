import { useContext } from "react";
import { MdCopyright } from "react-icons/md";
import { RiHeartFill } from "react-icons/ri";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user: userFromContext } = useContext(UserContext);
  return (
    <div className="footer">
      Developed By Great
      <RiHeartFill className="heart" />
      <a
        href="https://www.linkedin.com/in/bhaskar-kumar-das-64019a168/"
        target="_blank"
        style={{ color: "#eeeee4" }}
      >
        {userFromContext.name}
      </a>
      <MdCopyright />
      2023
      <strong>
        Food<span>Villa</span>
      </strong>
    </div>
  );
};

export default Footer;
