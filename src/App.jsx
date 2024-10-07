import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import ProjectItem from "./components/Project/ProjectItem";
import { projectData } from "./utils/projectData";

function App() {
  return (
    <div className='app-wrapper'>
      <Nav />
      <Hero />
      <SectionTitle title='Projects' />
      <div className='project-components-wrapper'>
        {projectData.map((project) => (
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
        ))}
      </div>
      <SectionTitle title='Experience' />
      <SectionTitle title='Education' />
      <SectionTitle title='Contact' />
    </div>
  );
}

export default App;
