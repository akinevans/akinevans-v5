import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./ProjectItem.css";

//? Moonjelly font for PetPal v1 image, Cloud Soft for v2

export default function ProjectItem(props) {
  return (
    <div id='projects-component' className='project-wrapper'>
      <div className='left'>
        <Link to={props.externalLink} target='_blank'>
          <img src={props.projectImg} alt={props.alt} className='project-img' />
        </Link>
      </div>
      <div className='right'>
        <h1 className='project-title'>{props.title}</h1>
        <p className='project-description'>{props.description}</p>
        <ul className='project-list'>
          <div className='list-left'>
            <li className='project-list-item'>{props.listItem1}</li>
            <li className='project-list-item'>{props.listItem2}</li>
            <li className='project-list-item'>{props.listItem3}</li>
          </div>
          <div className='list-right'>
            <li className='project-list-item'>{props.listItem4}</li>
            <li className='project-list-item'>{props.listItem5}</li>
            <li className='project-list-item'>{props.listItem6}</li>
          </div>
        </ul>
        <div className='project-links-wrapper'>
          <Link className='github-img' target='_blank' to={props.githubLink} />
          <Link
            className='external-link-img'
            target='_blank'
            to={props.externalLink}
          />
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  projectImg: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  listItem1: PropTypes.string,
  listItem2: PropTypes.string,
  listItem3: PropTypes.string,
  listItem4: PropTypes.string,
  listItem5: PropTypes.string,
  listItem6: PropTypes.string,
  githubLink: PropTypes.string,
  externalLink: PropTypes.string,
};
