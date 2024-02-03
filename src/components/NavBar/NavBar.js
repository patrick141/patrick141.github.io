import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="nav-elements">
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
