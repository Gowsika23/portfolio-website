import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'Infosys Springboard Internship',
      period: 'Oct 2024 - Dec 2024',
      description: `During my internship at Infosys, I worked on the frontend development of the Learning and Development Management System. The system allows admins to create courses for employees and track their progress. I was responsible for designing the user interfaces and developing web pages using technologies like HTML, CSS, React, and Bootstrap. I collaborated with a team to ensure a seamless user experience and contributed to improving employee engagement through the platform.`,
      imageUrl: 'assets/Infosys-Springboard.jpg', // Replace with the path to your image
    },
    {
      role: 'Octanet Internship',
      period: 'Jul 2024 - Aug 2024',
      description: `At Octanet, I worked on several web development projects, including building a To-Do List and a VR for Mental Health landing page. These projects helped me gain hands-on experience with React, JavaScript, HTML, and CSS. I was responsible for creating user-friendly interfaces and ensuring responsive design across various devices. My role also involved implementing functionality such as adding tasks, editing, and deleting them in the To-Do List, which improved my problem-solving and coding skills.`,
      imageUrl: 'assets/octanet.jpg', // Replace with the path to your image
    },
    {
      role: 'Brainery Spot Technology',
      period: 'Jun 2024 - Jul 2024',
      description: `At Brainery Spot Technology, I gained valuable experience in full-stack development. I worked on building web applications using technologies such as Node.js, React, and MongoDB. The experience allowed me to understand both frontend and backend development, from creating user interfaces to managing databases and server-side logic. It was a great opportunity to strengthen my coding skills and learn more about the entire web development lifecycle.`,
      imageUrl: 'assets/brainery.jpg', // Replace with the path to your image
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img src={exp.imageUrl} alt={exp.role} className="experience-image" />
            <div className="experience-details">
              <h3>{exp.role}</h3>
              <p>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
