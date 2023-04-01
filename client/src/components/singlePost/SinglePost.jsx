import "./singlePost.css";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <FiEdit className="singlePostIcon" />
            <MdOutlineDeleteForever className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Michael</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          tenetur. Delectus consequatur ad ut tenetur officia, debitis mollitia
          temporibus odit distinctio ex, enim neque quos deleniti pariatur
          libero, impedit dolorum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nostrum, tenetur. Delectus consequatur ad ut tenetur
          officia, debitis mollitia temporibus odit distinctio ex, enim neque
          quos deleniti pariatur libero, impedit dolorum? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nostrum, tenetur. Delectus
          consequatur ad ut tenetur officia, debitis mollitia temporibus odit
          distinctio ex, enim neque quos deleniti pariatur libero, impedit
          dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum, tenetur. Delectus consequatur ad ut tenetur officia, debitis
          mollitia temporibus odit distinctio ex, enim neque quos deleniti
          pariatur libero, impedit dolorum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum, tenetur. Delectus consequatur
          ad ut tenetur officia, debitis mollitia temporibus odit distinctio ex,
          enim neque quos deleniti pariatur libero, impedit dolorum? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nostrum, tenetur.
          Delectus consequatur ad ut tenetur officia, debitis mollitia
          temporibus odit distinctio ex, enim neque quos deleniti pariatur
          libero, impedit dolorum?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
