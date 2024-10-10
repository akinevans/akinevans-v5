import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import "./Button.css";

export default function Button(props) {
  return (
    <Link
      to={props.to}
      target='_blank'
      className={`link-btn ${props.className}`}
    >
      {props.title}
    </Link>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};
