import { PropTypes } from "prop-types";

import "./SectionTitle.css";

export default function SectionTitle(props) {
  return <h1 className={`section-title ${props.className}`}>{props.title}</h1>;
}

SectionTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
