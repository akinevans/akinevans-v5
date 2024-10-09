import "./SectionTitle.css";

export default function SectionTitle(props) {
  return <h1 className={`section-title ${props.className}`}>{props.title}</h1>;
}
