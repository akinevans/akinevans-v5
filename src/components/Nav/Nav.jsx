import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className='nav'>
      <Link to='' className='nav-link'>
        Home
      </Link>
      <Link to='' className='nav-link'>
        Projects
      </Link>
      <Link to='' className='nav-link'>
        Resume
      </Link>
      <Link to='' className='nav-link'>
        Contact
      </Link>
    </nav>
  );
}
