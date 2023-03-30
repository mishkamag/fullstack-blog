import "./topbar.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <BsFacebook className="topIcon" size={29} />
        <FaInstagramSquare className="topIcon" size={29} />
        <BsPinterest className="topIcon" size={29} />
        <FaTwitter className="topIcon" size={29} />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>WRITE</li>
          <li>LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          src="https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.6435-9/65296906_1039287772940954_5380062896111747072_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=GbwA_yS-AywAX98OLEF&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCMLLInQC07Pb3qpis6Lt0_u_uy1znII9s6LcuDrgHt7A&oe=644D137F"
          alt=""
          className="topImg"
        />
        <AiOutlineSearch className="topSearchIcon" size={29} />
      </div>
    </div>
  );
};

export default TopBar;
