import { MdCopyright } from "react-icons/md";
import { RiHeartFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      Created By
      <RiHeartFill className="heart" />
      <a
        href="https://www.linkedin.com/in/bhaskar-kumar-das-64019a168/"
        target="_blank"
        style={{ color: "#eeeee4" }}
      >
        Phoenix
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
