"use client";
import Image from "next/image";
import "./page.css";  // import the page.css to allow me to alter this page's 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  return (
    <>
      {/* HERE I will put the content for the home page only */}
      <div id="home-container">

        <div id="welcome" className="section">

          <h1 className="title-heading">Welcome to my personal site</h1>
          <div className="welcome-content">
            <img src="./picture/romain-hackumbc-organizer-profile-photo-cropted.jpg" alt="a picture of the author of this page, Romain Dzeinse" className="welcome-img"/>
            <div className="welcome-text">
              <p>My name is Romain Dzeinse. I am a sophomore at the University of Maryland, Baltimore County (<a href="https://umbc.edu" className="link-color">UMBC</a>), majoring in Computer Science. I am from the DMV area, specifically, Odenton, Maryland. I am currently taking my school's Data Structures class this site will be documenting my experiences and best resources to understand these topics.</p>
            </div>
          </div>
        </div>

        {/* <hr></hr> */}
        <div id="about" className="section">
          <h1 className="title-heading">About this site</h1>
          <div className="about-content">
            <div>
              <h2>Why make a site and title it your name?</h2>
              <p>For one, the author seems to be self absorbed at times. But, the main reason why this site was created was to give me a chance to share the author's <a href="/projects" className="link-color">personal projects</a>. A chance to post some <a href="./insights" className="link-color">insights</a> and the lessons learned along the years as a developer. This site was created as a hub for all things programming that pique the author's interests and much more. Simply put, the site was built to help the author explore and reflect on what he has learned over the years.</p>
            </div>
            <div>
              <h2>What visitors can expect?</h2>
              <p>This website will contain some information regaridng the author. Information about his projects, his take on web related topics/discussions. Visitors can expect to read about some recommendations for which UMBC <a href="./insights" className="link-color">Computer Science professors</a> students should enrol with. Visitors would also expect beneficial insights and comments related to the Computer Science field. It goes without saying that visitor will also expect a respectful author.</p>
            </div>
            <div>
              <h2>Related topics will include, but not limited:</h2>
              <p>Computer Science, Web development, App development, Full stack development, Data Analytics, Python, C++, C, JS, SQL, NoSQL, and other things of that realm.</p>
              <p></p>
            </div>
          </div>
        </div>


        <div id="contact" className="section">

          <h1 className="title-heading">Contact Me</h1>
          <div className="sub-titles">
            <p>Send me a message!</p>
            <p>Connect with me on socials</p>
          </div>
          <div className="choices">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const name = e.target.name.value;
                const email = e.target.email.value;
                const message = e.target.message.value;

                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, email, message }),
                });

                const data = await res.json();
                alert(res.ok ? "✅ Message sent!" : `❌ ${data.message}`);
                if (res.ok) {
                  e.target.reset();
                }
              }}
              className="space-y-4 max-w-md">

              <input type="text" name="name" placeholder="John Doe" required className="w-full border border-gray-300 p-2 rounded box"/>
              <input type="email" name="email" placeholder="jdoe@someemail.com" required className="w-full border border-gray-300 p-2 rounded box"/>
              <textarea name="message" placeholder="Your Message" rows={5} required className="w-full border border-gray-300 p-2 rounded box"/>
              <button type="submit" className="cta-button bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
            </form>
            <div className="socials">
              <h2><FontAwesomeIcon icon={faLinkedin} className="LI" size="2x"/></h2>
              <h2><FontAwesomeIcon icon={faGithub} className="LI" size="2x"/></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
