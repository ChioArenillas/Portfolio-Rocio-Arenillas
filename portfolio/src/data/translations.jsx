
export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills & Tools",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      design: "DESIGN",
      designer: "UX UI Designer",
      code: "<CODE/>",
      developer: "Frontend Developer",
    },
    about: {
      kicker: "About",
      title: "< Holaa! I'm Chio, 👋 />",
      subtitle: "A little bit about who I am, what I do, and what I enjoy building",
      description: (styles) => (
<>
  <p>
    <span className={styles.colorText}>&lt;p&gt;</span> 
    I am a <span className={styles.colorText}>Frontend Developer</span> focused on UX/UI based in Madrid, 
    specialized in <span className={styles.colorText}>React, TypeScript, and user-centered interface development</span>. 
    My background in psychology and UX/UI design allows me to combine logic, design, and user experience 
    to create functional, accessible, and visually polished digital products.
    <span className={styles.colorText}>&lt;/p&gt;</span>
  </p>
  <br />
  <p>
    <span className={styles.colorText}>&lt;p&gt;</span> 
    I have developed complete web applications with authentication, API integration, state management, and responsive design, 
    also working with Firebase for user authentication and database management. I apply best development practices, 
    clean code organization, and scalable architecture to create smooth and maintainable user experiences. 
    In addition, my previous experience in team management and customer-facing roles provides me with a user-oriented mindset, 
    strong communication skills, and the ability to transform real needs into functional digital solutions.
    <span className={styles.colorText}>&lt;/p&gt;</span>
  </p>
</>      ),
      downloadCV: "Download CV",
      coverLetter: "Cover Letter",
      cvLink: "/cv/CV-Rocio-Arenillas-ENG.pdf",
      coverLetterLink: "/cv/Cover-Letter-Rocio-Arenillas-ENG.pdf"
    },
    skills: {
      kicker: "What I use",
      title: "< Skills & Tools />",
      subtitle: "Technologies and tools I work with on a daily basis",
    },
    projects: {
      kicker: "My Work",
      title: "< Projects />",
      subtitle: "Selected projects I’ve built in frontend and UI design",
    },
    contact: {
      kicker: "Get in touch",
      title: "< Contact />",
      subtitle: "Say Hello!",
            intro: (
        <>
      <p>I'd love to hear from you!</p>
      <br></br>
      <p>Whether you have a brilliant idea, a random thought, or just want to say hi.</p>
            <br></br>
<p>Don't be shy!</p>
      </>
    ),
      nameLabel: "Name:",
      namePlaceholder: "Your Name",
      emailLabel: "Email Address:",
      emailPlaceholder: "Your Email",
      messageLabel: "Message:",
      messagePlaceholder: "Type your message here...",
      submitBtn: "Say Hello!",
      successMessage: "✔️ Your message has been sent! I'll get back to you soon 💌",
      errorMessage: "Something went wrong, try again later.",
    },
    footer: {
      text: (
          <p>&#169; 2025 | <a href="https://www.figma.com/design/FR1RaEwYZDjq3avU5jjOEo/Roc%C3%ADo-Arenillas-CV?node-id=0-1">Designed</a> and <a href="https://github.com/ChioArenillas/Portfolio-Rocio-Arenillas.git">code</a> ❤️️ by Rocio Arenillas </p>
      ),
        },
  },
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Herramientas",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      design: "DISEÑO",
      designer: "Diseñadora UX UI",
      code: "<CODE/>",
      developer: "Frontend Developer",
    },
    about: {
      kicker: "Sobre mí",
      title: "< ¡Holaa! Soy Chio, 👋 />",
      subtitle: "Un poco sobre quién soy, qué hago y qué disfruto construir",
description: (styles) => (
<>
  <p>
    <span className={styles.colorText}>&lt;p&gt;</span> 
    Soy <span className={styles.colorText}>Desarrolladora Frontend</span> con enfoque en UX/UI basada en Madrid, 
    especializada en <span className={styles.colorText}>React, TypeScript y desarrollo de interfaces centradas en el usuario</span>. 
    Mi background en psicología y diseño UX/UI me permite combinar lógica, diseño y experiencia de usuario 
    para crear productos digitales funcionales, accesibles y visualmente cuidados.
    <span className={styles.colorText}>&lt;/p&gt;</span>
  </p>

  <br />

  <p>
    <span className={styles.colorText}>&lt;p&gt;</span> 
    He desarrollado aplicaciones web completas con autenticación, consumo de APIs, gestión de estado y diseño responsive, 
    trabajando también con Firebase para autenticación de usuarios y gestión de bases de datos. Aplico buenas prácticas 
    de desarrollo, organización de código y arquitectura escalable para crear experiencias fluidas y mantenibles. 
    Además, mi experiencia previa en gestión de equipos y atención al cliente me aporta una visión orientada al usuario, 
    comunicación efectiva y capacidad para transformar necesidades reales en soluciones digitales funcionales.
    <span className={styles.colorText}>&lt;/p&gt;</span>
  </p>
</>
),
      downloadCV: "Descargar CV",
      coverLetter: "Carta",
      cvLink: "/cv/CV-Rocio-Arenillas-ESP.pdf",
      coverLetterLink: "/cv/Carta-Presentaci%C3%B3n-Rocio-Arenillas-ESP.pdf"

    },
    skills: {
      kicker: "Lo que uso",
      title: "< Herramientas />",
      subtitle: "Tecnologías y herramientas con las que trabajo a diario",
    },
    projects: {
      kicker: "Mi Trabajo",
      title: "< Proyectos />",
      subtitle: "Algunos de los proyectos en los que he estado trabajando",
    },
    contact: {
      kicker: "Ponte en contacto",
      title: "< Contacto />",
      subtitle: "¡Saluda!",
      intro: (
        <>
      <p>¡Me encantaría saber de ti!</p>
      <br></br>
      <p>Ya sea que tengas una idea brillante, un pensamiento aleatorio o simplemente quieras saludar.</p>
            <br></br>
<p>¡Contacta ahora!</p>
      </>
    ),
      nameLabel: "Nombre:",
      namePlaceholder: "Tu Nombre",
      emailLabel: "Email:",
      emailPlaceholder: "Tu Email",
      messageLabel: "Mensaje:",
      messagePlaceholder: "Escribe aquí tu mensaje...",
      submitBtn: "¡Decir Hola!",
      successMessage: "✔️ ¡Tu mensaje ha sido enviado! Te responderé pronto 💌",
      errorMessage: "Algo salió mal, inténtalo de nuevo más tarde.",
    },
    footer: {
      text: (
          <p>&#169; 2025 | <a href="https://www.figma.com/design/FR1RaEwYZDjq3avU5jjOEo/Roc%C3%ADo-Arenillas-CV?node-id=0-1">Diseñado</a> y <a href="https://github.com/ChioArenillas/Portfolio-Rocio-Arenillas.git">desarrollado</a> ❤️️ por Rocio Arenillas </p>
      ),
    },
  },
};