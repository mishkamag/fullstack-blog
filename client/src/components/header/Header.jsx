import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="smallTitle">Myself & Me</span>
        <span className="largeTItle">Blog</span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1500828131278-8de6878641b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        alt=""
        className="headerImg"
      />
    </div>
  );
};

export default Header;
