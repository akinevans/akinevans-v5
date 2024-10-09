import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import ProjectItem from "./components/Project/ProjectItem";
import DataCard from "./components/DataCard/DataCard";
import Footer from "./components/Footer/Footer";
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
      {/* FIXME: this structure is clunky and the css is overcomplicated. Make experience and education their own sections and place them side-by-side */}
      <div className='experience-education-wrapper'>
        <div className='experience-wrapper'>
          <SectionTitle title='Experience' className='alt-margin' />

          <div className='data-card-components-wrapper'>
            <DataCard
              startDate='Jun 2023'
              endDate='Jan 2024'
              title='Google'
              position='Front-End Developer'
            />
            <DataCard
              startDate='Jun 2023'
              endDate='Jan 2024'
              title='Google'
              position='Front-End Developer'
            />
            <DataCard
              startDate='Jun 2023'
              endDate='Jan 2024'
              title='Googleeeeeeeeeee'
              position='Front-End Developer'
            />
            <DataCard
              startDate='Jun 2023'
              endDate='Jan 2024'
              title='Google'
              position='Front-End Developer'
            />
          </div>
        </div>
        <div className='education-wrapper'>
          <SectionTitle title='Education' className='alt-margin' />

          <div className='data-card-components-wrapper'>
            <DataCard
              startDate='Jun 2023'
              endDate='Jan 2024'
              title='Google'
              position='Front-End Developer'
            />
            <DataCard
              startDate='Jun 2023'
              endDate='Jan 2024'
              title='Google'
              position='Front-End Developer'
            />
            <DataCard
              startDate='Jun 2023'
              endDate='Jan 2024'
              title='Googleeeeeeeeeee'
              position='Front-End Developer'
            />
            <DataCard
              startDate='Jun 2023'
              endDate='Jan 2024'
              title='Google'
              position='Front-End Developer'
            />
          </div>
        </div>
      </div>

      <SectionTitle title='Contact' className='alt-margin' />
      <Footer />
    </div>
  );
}

export default App;
