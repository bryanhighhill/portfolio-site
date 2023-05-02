import React from "react";
import { useState, useEffect } from 'react';
import "./App.css";
import AppBanner from './Components/AppBanner/AppBanner';
import header1 from './Images/bryan-header-img1.png';
import header2 from './Images/bryan-header-img2.png';
import footer1 from './Images/bryan-footer-img1.png';
import footer2 from './Images/bryan-footer-img2.png';
import nameHeader from './Images/name-header.png';


function App() {
  const [aboutMe, setAboutMe] = useState(false);
  const [contact, setContact] = useState(false);
  const [footerHover, setFooterHover] = useState(false);
  const [greetingPosition, setGreetingPosition] = useState(0);
  const [headerHover, setHeaderHover] = useState(false);
  const [headerClicked, setHeaderClicked] = useState(false);
  const images = [
    header1,
    header2,
    footer1,
    footer2
  ];
  const randomNumber = Math.floor(Math.random() * 98);

  return (
    <div className="App">
      <div className="nav-btns"> 
        <button className="about-me" onClick={() => setAboutMe(!aboutMe)}>{!aboutMe ? 'About Me' : <b>I'm Done Learning About You</b>}</button>
        <button className="about-me" onClick={() => setContact(!contact)}>{!contact ? 'Contact' : <b>I've Gotten Your Contact</b>}</button>
        <button className="about-me" onClick={() => window.open('https://drive.google.com/file/d/1Y73wHY01RstWHTDNyal7k1OkeOcGG-6Y/view?usp=share_link')}>Resume</button>
      </div>
            {contact && 
              <div className="bio">
                <h1 className="hello">Contact</h1>
                <section className="bio-content">
                  <a href="mailto:bryanhighhill@gmail.com">Send Email</a>
                </section>  
                <section className="bio-content">
                  <a href="https://www.linkedin.com/in/bryan-highhill/" target="_blank">LinkedIn</a>
                </section>
                <section className="bio-content">
                  <a href="https://github.com/bryanhighhill" target="_blank">Github</a>
                </section>
                <section className="bio-content">
                  <a href="https://www.bryanhighhill.com" target="_blank">Music/Audio</a>
                </section> 
              </div>
            }
            {aboutMe &&
              <section className="bio">
                {/* <h1 className="hello">{greetings[greetingPosition].greeting}!</h1> */}
                <h1 className="hello">Hello!</h1>
                <p className="bio-content">
                  I'm a full-stack software engineer with a background rooted firmly in personal-motivation, creative problem-solving, learning, and creating things. 
                  It started as a love for music at a young age, writing songs and using technology to make, record, and produce music. This developed into not only a life long passion, 
                  but a 10 year career working mostly behind-the-scenes in radio and with broadcast technology.
                  Since 2017, I’ve worked as Digital Content Specialist at a large law firm, producing and managing various digital assets, providing technical support, 
                  and working with clients.
                  I’m enthusiastic about software and web development because it’s a field where I get to take advantage of the technical and interpersonal skills I’ve honed. It relies on a growth-mindset and applying creative-thinking in a practical and meaningful way.
                  Below, I've included some of the web apps I've built. 
                  <br />
                  I will be adding more information to explain each of the apps in greater detail, but in the meantime, please hover over an image for a summary of the app, navigate using the arrows, and you can click through to view them on github.  
                </p>
              </section>
            }
      <section className="header-div">
        <img 
          className="header-img"
          src={nameHeader} 
          alt="bryan"
          // onMouseEnter={() => setHeaderHover(true)}
          // onMouseLeave={() => setHeaderHover(false)}
          onClick={() => setHeaderClicked(!headerClicked)}
        />
        <img 
          className="header-img"
          src={headerHover ? images[1] : images[0]} 
          alt="bryan"
          onMouseEnter={() => setHeaderHover(true)}
          onMouseLeave={() => setHeaderHover(false)}
          onClick={() => setHeaderClicked(!headerClicked)}
        />
      </section>
      <AppBanner />
      <section className="header-div">
          <img 
            className="footer-img"
            src={footerHover ? images[3] : images[2]} 
            alt="bryan"
            onMouseEnter={() => setFooterHover(true)}
            onMouseLeave={() => setFooterHover(false)}
        />
      </section>
    </div>
  );
}

export default App;
