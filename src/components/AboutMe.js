import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
  const [role, setRole] = useState('Java Developer');

  useEffect(() => {
    const roles = ['Java Developer', 'Frontend Developer', 'Web Designer'];
    let index = 0;

    const roleInterval = setInterval(() => {
      index = (index + 1) % roles.length;
      setRole(roles[index]);
    }, 4000); // Change role every 4 seconds

    return () => clearInterval(roleInterval); // Cleanup on unmount
  }, []);

  return (
    <section id="about" className="about-me">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="about-text"
      >
        <h2>Hi..I am Gowsika!!</h2>
        <motion.h3
          key={role}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          className="role-text"
        >
          {role}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hello! I’m Gowsika, a pre-final year B.Tech Information Technology student  at V.S.B Engineering College.
          With a strong passion for coding and design, I’ve honed my skills as a Java developer and web designer.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Throughout my academic journey, I have worked on multiple projects, including developing a Learning and Development Management System, a virtual reality landing page for mental health, and several interactive web applications. I enjoy solving complex problems and continuously improving my skills in Java and frontend development.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Feel free to explore my portfolio to see my work, and don’t hesitate to reach out for any opportunities or collaborations.
        </motion.p>
      </motion.div>

      {/* Image section on the right */}
      <motion.div
  initial={{ opacity: 0, x: 200 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="about-image"
>
  <img src="/assets/my-photo.jpg" alt="Gowsika" />
</motion.div>

    </section>
  );
}

export default AboutMe;
