import "./Hero.css";
import Button from "../Button/Button";
import resume from "../../assets/Akin-Evans-Resume.pdf";

export default function Hero() {
  return (
    <div id='hero-component' className='hero-wrapper'>
      <h1 className='heading'>Akin Evans</h1>
      <h2 className='subheading'>
        <span className='highlight'>Front-End Developer</span> passionate about{" "}
        <br />
        building beautiful user interfaces
      </h2>
      <div className='hero-btn-wrapper'>
        <Button to='mailto:akinevans@gmail.com' title='Email' className='' />
        <Button to='https://github.com/akinevans' title='GitHub' className='' />
        <Button
          to='https://www.linkedin.com/in/akinevans/'
          title='LinkedIn'
          className=''
        />
        <Button to={resume} title='Download CV' className='highlight-btn' />
      </div>
    </div>
  );
}
