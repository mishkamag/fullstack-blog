import "./sidebar.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
          eligendi porro repellendus iusto expedita eius harum est deserunt
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li>Life</li>
          <li>Music</li>
          <li>Style</li>
          <li>Sport</li>
          <li>Tech</li>
          <li>Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <BsFacebook className="sidebarIcon" size={19} />
          <FaInstagramSquare className="sidebarIcon" size={19} />
          <BsPinterest className="sidebarIcon" size={19} />
          <FaTwitter className="sidebarIcon" size={19} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
