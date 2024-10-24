import { PropTypes } from "prop-types";
import "./DataCard.css";

export default function DataCard(props) {
  return (
    <div id='data-card' className={`data-card-wrapper ${props.className}`}>
      <p className='date'>{`${props.startDate} ${props.endDate ? "-" : ""} ${
        props.endDate
      }`}</p>
      <h1 className='title'>{props.title}</h1>
      <h2 className='position'>{props.position}</h2>
    </div>
  );
}

DataCard.propTypes = {
  className: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.string,
};
