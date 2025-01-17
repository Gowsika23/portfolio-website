import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Learning and Development Management System',
      description: `The Learning and Development Management System is a two-month team project designed for an organization where admins can create and manage courses for employees. It allows admins to track employees' progress, assign courses, and evaluate their performance. Employees can access the courses, complete tasks, and provide feedback. Based on employee feedback and requests, the courses are updated. This system enhances employee engagement and facilitates continuous learning within the organization. My contribution focused on the frontend part, where I designed the user interfaces and developed the pages using HTML, CSS, React, and Bootstrap.`,
      imageUrl: 'assets/LDMS.jpg', // Replace with the path to your image
    },
    {
      name: 'VR for Mental Health Landing Page',
      description: `The VR for Mental Health Landing Page is an interactive web page that raises awareness about the use of Virtual Reality (VR) technology for improving mental health. It highlights how VR can be used as a therapeutic tool to reduce stress, anxiety, and depression. The landing page includes various sections, such as an introduction to VR, its benefits for mental health, and the future of VR therapy. I worked on designing the layout and creating engaging UI elements using HTML, CSS, and Bootstrap to create a smooth and interactive user experience.`,
      imageUrl: 'assets/VR.jpg', // Replace with the path to your image
    },
   
    {
      name: 'My Portfolio',
      description: `My Portfolio website serves as a comprehensive showcase of my skills, projects, and experiences in web development. The portfolio highlights my journey as a developer, featuring detailed descriptions of my previous projects, the technologies I've worked with, and my accomplishments. It includes interactive features, animations, and a contact form where visitors can reach out to me. This website is designed to reflect my professional skills and provides potential clients or employers with an overview of my capabilities. I used HTML, CSS, React, and Bootstrap to develop and design the portfolio, focusing on a user-friendly and visually appealing layout.`,
      imageUrl: 'assets/portfolio.jpg', // Replace with the path to your image
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.name} className="project-image" />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
