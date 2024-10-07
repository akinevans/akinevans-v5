import { Link } from "react-router-dom";
import "./Button.css";

export default function Button(props) {
  return (
    <Link
      to={props.to}
      download={props.download ? props.download : null}
      target='_blank'
      className={`link-btn ${props.className}`}
      onClick={props.onClick ? props.onClick : null}
    >
      {props.title}
    </Link>
  );
}
