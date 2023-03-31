import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero est
        maxime qui inventore iure ducimus placeat soluta reiciendis. Beatae
        voluptates officia molestiae quae hic, veniam modi. Provident, quidem
        tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        libero est maxime qui inventore iure ducimus placeat soluta reiciendis.
        Beatae voluptates officia molestiae quae hic, veniam modi. Provident,
        quidem tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fuga libero est maxime qui inventore iure ducimus placeat soluta
        reiciendis. Beatae voluptates officia molestiae quae hic, veniam modi.
        Provident, quidem tempore!
      </p>
    </div>
  );
};

export default Post;
