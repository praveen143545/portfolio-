import React from 'react';
import './Project.css'; // Import the advanced CSS

const Projects = () => {
  return (
    <div className="projects-container">
      <div className='project-card1' >
      <h1 className="section-title1">Online Stone and Marbles Shopping - Online Marketing</h1>
      
      <p className="project-description1">
        Technologies Used: HTML, CSS, JavaScript, Java, MySQL
        <br />
        Designed and developed a responsive and user-friendly interface using HTML, CSS, and JavaScript.
        Integrated dynamic product filtering, search functionality, and interactive UI elements for better user experience.
        Developed a Java-based backend to manage user authentication, orders, and inventory.
        Used MySQL to store and retrieve product details, customer data, and transaction records efficiently.
      </p>
      </div>

      <div className="project-card1">
        <h2 className="project-title1">E-Commerce Website</h2>
        <p className="project-description1">
          Technologies Used: HTML, CSS, JavaScript
          <br />
          Designed and developed a responsive and visually appealing UI using HTML and CSS.
          Implemented interactive features like product filtering, image sliders, and a shopping cart using JavaScript.
          Enhanced user experience and navigation with smooth animations and optimized page loading speed.
          Ensured cross-browser compatibility and a mobile-friendly layout for seamless user interaction.
        </p>
      </div>
    </div>
  );
};

export default Projects;
