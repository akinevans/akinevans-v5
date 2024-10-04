import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import SectionTitle from "./components/SectionTitle/SectionTitle";

function App() {
  return (
    <div className='app-wrapper'>
      <Nav />
      <Hero />
      <SectionTitle title='Projects' />
      <SectionTitle title='Experience' />
      <SectionTitle title='Education' />
      <SectionTitle title='Contact' />
    </div>
  );
}

export default App;
