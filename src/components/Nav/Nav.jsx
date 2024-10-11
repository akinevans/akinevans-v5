import "./Nav.css";
import { Link as Scroll_Link } from "react-scroll";

//TODO: make text color change depending on background color

export default function Nav() {
  return (
    <nav className='nav'>
      <Scroll_Link
        className='nav-link'
        to='hero-component'
        smooth={true}
        offset={-40}
        duration={800}
      >
        Home
      </Scroll_Link>

      <Scroll_Link
        className='nav-link'
        to='projects-component'
        smooth={true}
        offset={-160}
        duration={800}
      >
        Projects
      </Scroll_Link>

      <Scroll_Link
        className='nav-link'
        to='data-card'
        smooth={true}
        offset={-180}
        duration={800}
      >
        Resume
      </Scroll_Link>
    </nav>
  );
}
