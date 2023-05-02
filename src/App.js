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
  const randomNumber = Math.floor(Math.random() * 98);

  useEffect(() => {
      setTimeout(() => {
          setGreetingPosition(randomNumber);
      }, 2500);
  }, [greetingPosition]);

  const greetings = [
    {greeting: 'Hello'},
    {greeting: 'Hallo'},
    {greeting: 'Përshëndetje'},
    {greeting: 'Iwi selami newi'},
    {greeting: 'Marhaba'},
    {greeting: 'Barev'},
    {greeting: 'Kamisaki'},
    {greeting: 'Salam'},
    {greeting: 'Kaixo'},
    {greeting: 'Vitaju'},
    {greeting: 'Hyālō'},
    {greeting: 'Zdravo'},
    {greeting: 'Zdraveĭte'},
    {greeting: 'Haallo'},
    {greeting: 'Nǐ hǎo'},
    {greeting: 'Hola'},
    {greeting: 'Kamusta'},
    {greeting: 'Moni'},
    {greeting: 'Bonghjornu'},
    {greeting: 'Zdravo'},
    {greeting: 'Ahoj'},
    {greeting: 'Hej'},
    {greeting: 'Hallo'}, 
    {greeting: 'Tere'},
    {greeting: 'Salām'},
    {greeting: 'Bula'},
    {greeting: 'Kumusta'},
    {greeting: 'Hei'},
    {greeting: 'Bonjour'},
    {greeting: 'Dia dhuit'},
    {greeting: 'Ola'},
    {greeting: 'Gamarjoba'},
    {greeting: 'Guten tag'},
    {greeting: 'Geia'},
    {greeting: "Mba'éichapa"},
    {greeting: 'Bonjou'},
    {greeting: 'Aloha'},
    {greeting: 'Shalom'},
    {greeting: 'Namaste'},
    {greeting: 'Nyob zoo'},
    {greeting: 'Szia'},
    {greeting: 'Halló'},
    {greeting: 'Ndewo'},
    {greeting: 'Hello'},
    {greeting: 'Halo'},
    {greeting: 'Ciao'},
    {greeting: 'Konichiwa'},
    {greeting: 'Sälemetsiz be'},
    {greeting: 'Suostei'},
    {greeting: 'Mwaramutse'},
    {greeting: 'Anyeong haseyo'},
    {greeting: 'Slav'},
    {greeting: 'Sabaidi'},
    {greeting: 'Salve'},
    {greeting: 'Sveika'},
    {greeting: 'Sveiks'},
    {greeting: 'Sveiki'},
    {greeting: 'Moien'},
    {greeting: 'Salama'},
    {greeting: 'Selamat pagi'},
    {greeting: 'Bongu'},
    {greeting: 'Nǐ hǎo'},
    {greeting: 'Kia ora'},
    {greeting: 'Namaskāra'},
    {greeting: 'Sain uu'},
    {greeting: 'Niltze Tialli Pialli'},
    {greeting: 'Ya’at’eeh'},
    {greeting: 'Namaskāra'},
    {greeting: 'Hei'},
    {greeting: 'Salam'},
    {greeting: 'Cześć'},
    {greeting: 'Olá'},
    {greeting: 'Sata srī akāla'},
    {greeting: 'Akkam'},
    {greeting: 'Allianchu'},
    {greeting: 'Bunâ'},
    {greeting: 'Privet'},
    {greeting: 'Talofa'},
    {greeting: 'Thobela'},
    {greeting: 'Zdravo'},
    {greeting: 'Dumela'},
    {greeting: 'Ahoj'},
    {greeting: 'Zdravo'},
    {greeting: 'Jambo'},
    {greeting: 'Hallå'},
    {greeting: 'Kamusta'},
    {greeting: 'Ia Orana'},
    {greeting: 'Li-hó'},
    {greeting: 'Vanakkam'},
    {greeting: 'S̄wạs̄dī'},
    {greeting: 'Tashi delek'},
    {greeting: 'Mālō e lelei'},
    {greeting: 'Avuxeni'},
    {greeting: 'Merhaba'},
    {greeting: 'Privit'},
    {greeting: 'Assalāmu Alaykum'},
    {greeting: 'Salom'},
    {greeting: 'Xin chào'},
    {greeting: 'Helo'},
    {greeting: 'Molo'},
];

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
          onMouseEnter={() => setHeaderHover(true)}
          onMouseLeave={() => setHeaderHover(false)}
          onClick={() => setHeaderClicked(!headerClicked)}
        />
        <img 
          className="header-img"
          src={footerHover ? header2 : header1} 
          alt="bryan"
          onMouseEnter={() => setFooterHover(true)}
          onMouseLeave={() => setFooterHover(false)}
          onClick={() => setHeaderClicked(!headerClicked)}
        />
      </section>
      <AppBanner />
      <section className="header-div">
          <img 
            className="footer-img"
            src={headerHover ? footer2 : footer1} 
            alt="bryan"
            onMouseEnter={() => setHeaderHover(true)}
            onMouseLeave={() => setHeaderHover(false)}
        />
      </section>
    </div>
  );
}

export default App;
