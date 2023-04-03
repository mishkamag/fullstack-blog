import "./topbar.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = true;
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
          <li>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            src="https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.6435-9/65296906_1039287772940954_5380062896111747072_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=GbwA_yS-AywAX98OLEF&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCMLLInQC07Pb3qpis6Lt0_u_uy1znII9s6LcuDrgHt7A&oe=644D137F"
            alt=""
            className="topImg"
          />
        ) : (
          <ul className="topList">
            <li>
              {" "}
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>

            <li>
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <AiOutlineSearch className="topSearchIcon" size={29} />
      </div>
    </div>
  );
};

export default TopBar;
