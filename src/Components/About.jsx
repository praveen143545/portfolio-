import React, { useState, useEffect } from 'react';
import './About.css';  

const About = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-container">
      {/* Header Section */}
      <header className={`about-header ${scrolling ? 'scrolled' : ''}`}>
        <h1>About Me</h1>
        <p>I'm a passionate web designer, eager to bring creative ideas to life with code.</p>
      </header>

      {/* Profile Section */}
      <section className={`profile-section ${scrolling ? 'scrolled' : ''}`}>
        <h2>Hi, I'm [ S.praveen kumar]</h2>
        <p>I’m a web designer with a passion for creating beautiful, user-friendly websites. I am proficient in HTML, CSS, JavaScript, react and always strive to create responsive and accessible designs.</p>
      </section>

      {/* Education Section */}
      <section className={`education-section ${scrolling ? 'scrolled' : ''}`}>
        <h2>Education</h2>
        <ul>
        <li><strong>Higher Secondary school [Vidhya matric.hr.sec.school-Medavakkam]</strong> - Commmerce with computerApplication(Group).</li>
          <li><strong>University of [Mohammad sathak college of arts and science-sholinganallur]</strong> - Bachelor of Computer Application(BCA).</li>
          <li><strong> Courses: - Edureka learning center-tambaram </strong>- FullStack Development in java.</li>
          <li>      <strong>       - Magic bus foundation-medavakkam </strong>- web designer </li>
          

        </ul>
      </section>

      <div className="container">
      <h2>My Skills</h2>
      <ul>
        <li>
          <span>HTML</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
          <span className="percentage">90%</span>
        </li>
        <li>
          <span>CSS</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
          <span className="percentage">85%</span>
        </li>
        <li>
          <span>Java</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
          <span className="percentage">70%</span>
        </li>
        <li>
          <span>JavaScript</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
          <span className="percentage">80%</span>
        </li>
        <li>
          <span>React.js</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }}></div>
          </div>
          <span className="percentage">75%</span>
        </li>
        <li>
          <span>SpringBoot</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '65%' }}></div>
          </div>
          <span className="percentage">65%</span>
        </li>
        <li>
          <span>MySQL</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
          <span className="percentage">80%</span>
        </li>
      </ul>
    </div>

      
      
    </div>
  );
};

export default About;
