import "./Hero.css";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className='hero-wrapper'>
      <h1 className='heading'>Akin Evans</h1>
      <h2 className='subheading'>
        <span className='highlight'>Front-End Developer</span> passionate about
        building beautiful user interfaces
      </h2>
      <div className='hero-btn-wrapper'>
        <Button
          to='mailto:akinevans@gmail.com'
          title='Email'
          className=''
          onClick={() => {
            console.log("email btn");
          }}
        />
        <Button
          to='https://github.com/akinevans'
          title='GitHub'
          className=''
          onClick=''
        />
        <Button
          to='https://www.linkedin.com/in/akinevans/'
          title='LinkedIn'
          className=''
          onClick=''
        />
        <Button
          to=''
          title='Download CV'
          className='highlight-btn'
          onClick=''
        />
      </div>
    </div>
  );
}
