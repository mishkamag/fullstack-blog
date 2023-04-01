import "./write.css";
import { AiOutlineFolderAdd } from "react-icons/ai";

const Write = () => {
  return (
    <div className="write">
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
