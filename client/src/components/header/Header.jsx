import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="smallTitle">Myself & Me</span>
        <span className="largeTItle">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="headerImg"
      />
    </div>
  );
};

export default Header;
