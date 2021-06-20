import { links } from "./../services/navService";
import logo from "../logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url} className="nav-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
