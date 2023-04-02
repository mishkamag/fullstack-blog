import "./write.css";
import { AiOutlineFolderAdd } from "react-icons/ai";

const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.preview.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFromGroup">
          <label htmlFor="fileInput">
            <AiOutlineFolderAdd size={26} style={{ cursor: "pointer" }} />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFromGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <div className="writeSubmit">Publish</div>
      </form>
    </div>
  );
};

export default Write;
