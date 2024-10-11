import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import ProjectItem from "./components/Project/ProjectItem";
import DataCard from "./components/DataCard/DataCard";
import Footer from "./components/Footer/Footer";
import "./App.css";

// utility files
import { projectData } from "./utils/projectData";
import { experienceData } from "./utils/experience_education_Data";
import { educationData } from "./utils/experience_education_Data";

//TODO: Install and set up react-scroll for Nav
// Accessability
// Google Lighthouse
// Google analytics
//Add link to website in README
// Host and publish

function App() {
  //* Display component functions
  const displayProjects = () => {
    return projectData.map((project) => (
      <ProjectItem
        key={projectData.index}
        projectImg={project.projectImg}
        alt={project.alt}
        title={project.title}
        description={project.description}
        listItem1={project.listItem1}
        listItem2={project.listItem2}
        listItem3={project.listItem3}
        listItem4={project.listItem4}
        listItem5={project.listItem5}
        listItem6={project.listItem6}
        githubLink={project.githubLink}
        externalLink={project.externalLink}
      />
    ));
  };

  const displayExperienceCards = () => {
    return experienceData.map((card) => (
      <DataCard
        key={card.index}
        startDate={card.start}
        endDate={card.end}
        title={card.title}
        position={card.position}
      />
    ));
  };

  const displayEducationCards = () => {
    return educationData.map((card) => (
      <DataCard
        key={card.index}
        startDate={card.start}
        endDate={card.end}
        title={card.title}
        position={card.position}
      />
    ));
  };

  return (
    <div className='app-wrapper'>
      <Nav />
      <Hero />
      <SectionTitle title='Projects' />
      <div className='project-components-wrapper'>{displayProjects()}</div>

      <div className='experience-education-wrapper'>
        <div className='experience-wrapper'>
          <SectionTitle
            title='Experience'
            className='alt-margin alt-padding '
          />

          <div className='data-card-components-wrapper'>
            {displayExperienceCards()}
          </div>
        </div>
        <div className='education-wrapper'>
          <SectionTitle title='Education' className='alt-margin alt-padding' />

          <div className='data-card-components-wrapper'>
            {displayEducationCards()}
          </div>
        </div>
      </div>

      <SectionTitle title='Contact' className='alt-margin' />
      <Footer />
    </div>
  );
}

export default App;
