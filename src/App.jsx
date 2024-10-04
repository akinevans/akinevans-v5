import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import ProjectItem from "./components/Project/ProjectItem";
import cafe from "./assets/cafe.svg";

function App() {
  return (
    <div className='app-wrapper'>
      <Nav />
      <Hero />
      <SectionTitle title='Projects' />
      <ProjectItem
        projectImg={cafe}
        alt='cafe nyleta'
        title='Cafe Nyleta'
        description='A Full-Stack application for minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat nostrud iu tep. Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat nostrud iu tep.'
        listItem1='React'
        listItem2='JavaScript'
        listItem3='SCSS'
        listItem4='Example'
        listItem5='Example'
        listItem6='Example'
        githubLink='https://github.com/akinevans/cafe-nyleta'
        externalLink='https://cafe-nyleta.netlify.app/#/shop'
      />
      <SectionTitle title='Experience' />
      <SectionTitle title='Education' />
      <SectionTitle title='Contact' />
    </div>
  );
}

export default App;
