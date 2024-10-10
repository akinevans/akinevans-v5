import "./DataCard.css";

export default function DataCard(props) {
  return (
    <div className='data-card-wrapper'>
      <p className='date'>{`${props.startDate} ${props.endDate ? "-" : ""} ${
        props.endDate
      }`}</p>
      <h1 className='title'>{props.title}</h1>
      <h2 className='position'>{props.position}</h2>
    </div>
  );
}
