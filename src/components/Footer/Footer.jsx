import Button from "../Button/Button";
import "./Footer.css";
import resume from "../../assets/Akin-Evans-Resume.pdf";

export default function Footer() {
  return (
    <footer className='footer'>
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
        to={resume}
        title='Download CV'
        className='highlight-btn'
        onClick=''
      />
    </footer>
  );
}
