import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
import { BiUserCircle } from "react-icons/bi";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/5-nature-photography-landscape.preview.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <BiUserCircle className="settingsIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Michael" />
          <label>Email</label>
          <input type="email" placeholder="michael.gmail@.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
