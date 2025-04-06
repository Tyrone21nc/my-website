import Image from "next/image";
import "./page.css";  // import the page.css to allow me to alter this page's css


export default function Home() {
  return (
    <>
      {/* HERE I will put the content for the home page only */}
      <div id="home-container">

        <div id="welcome" className="section">

          <div className="welcome-content">
            <img src="./picture/romain-hackumbc-organizer-profile-photo-cropted.JPG" alt="a picture of the author of this page, Romain Dzeinse" className="welcome-img"/>
            <div className="welcome-text">
              <h3>Welcome to my personal site</h3>
              <p>My name is Romain Dzeinse. I am a sophomore at the University of Maryland, Baltimore County, majoring in Computer Science. I am from the DMV area, specifically, Odenton, Maryland. I am currently taking my school's Data Structures class this site will be documenting my experiences and best resources to understand these topics.</p>
            </div>
          </div>
        </div>

        {/* <hr></hr> */}
        <div id="about" className="section">
          <h3>About this page</h3>
          <p>This will be the about section. I will talk about what this site will be about</p>
        </div>
        {/* <hr></hr> */}
        <div id="contact" className="section">
          <h3>Contact</h3>
          <p>Get in touch with me!</p>
          <button className="cta-button">Contact Me</button>
        </div>
      </div>
    </>
  );
}
