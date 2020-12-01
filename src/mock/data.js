import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Valter', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Valter Cardoso',
  subtitle: 'I am a future Informatics Engineer and Web Designer.',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'valter_profile.jpg',
  paragraphOne:
    'I am a student of Informatics Engineering at Fernando Pessoa University in Portugal, at the last year of the degree course, missing only one subject to complete. Since only misses a subject to complete the degree, i am currently studying as an external student, in a master degree of Mobile and Ubiquitous Computing at the same University.',
  paragraphTwo:
    'I like to learn new programming languages, and self learning is a path that completes my knowledge. I am always excited for new projects and experiences ...',
  paragraphThree:
    'Nothing is impossible if it is possible to be done ... ... if I do not know, I will study and do it!',
  resume: 'https://europa.eu/!Qh64Tj', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projects/chat_app.jpg',
    title: 'Chat App',
    info:
      'It is a browser chat app, with chats separated by rooms, without cookies, private and with no message/user tracking after exiting the browser/tab.',
    info2:
      'Uses NodeJs with express framework, web sockets with Socket.io, mustache template and moment to format timestamps.',
    url: 'https://mrbitwise-chat-app.herokuapp.com',
    repo: 'https://github.com/RetlavSource/NodeJs-Socket.io-ChatApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/webp_app.jpg',
    title: 'WebP Converter',
    info:
      'This was a project for the Multimedia II subject at UFP University. It converts .jpeg, .jpg and .png formats in to .webp format.',
    info2:
      'Uses NodeJs with express framework, imagemin to convert, handlebars template engine and multer.',
    url: 'https://www.youtube.com/watch?v=8RkmncF3k7c',
    youtube: 'Video Tutorial', // added by me, valter cardoso, to insert youtube videos - sets new name for the url button
    repo: 'https://github.com/RetlavSource/WebP_Converter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/mygit_app.jpg',
    title: 'Git info bash',
    info:
      'This work was for fun, when i was tired to do all the times "git branch" and "git status", just to know what was untracked, modified, etc, or even to know if i had some work stashed (real problems can happen if you forget your stashed work 😬 ...).',
    info2:
      'Uses shell scripting, and is made for "bash" terminals. Tested in Linux Ubuntu and macOS Big Sur.',
    url: '',
    repo: 'https://github.com/RetlavSource/MyGit-Autocomplete', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/weather_app.jpg',
    title: 'Weather App Check',
    info: 'Simple app to check the weather in a given city.',
    info2:
      'Made with NodeJs with express framework, handlebars as template engine. Uses "weatherstack" and "mapbox" api\'s.',
    url: 'http://mrbitwise-weather-app.herokuapp.com',
    repo: 'https://github.com/RetlavSource/NodeJs-Weather-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/task_app.jpg',
    title: 'Task Manager API',
    info:
      'This is an API for creating, registering and login users, that can add tasks and manage them, and also send emails upon registering and deleting account. It communicates with any frontend application using JSON requests/responses.',
    info2:
      'Made with NodeJs with express framework, MongoDB(dev), MongoDB Atlas(prod), JWT(JSON Web Token) and SendGrid.',
    url: '',
    repo: 'https://github.com/RetlavSource/NodeJs-Task-Manager', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/control_app.jpg',
    title: 'Client Control Management',
    info:
      'Simple app to count the number of clients inside a shopping center, controlling the flow of clients. Used by security to count the clients in real time.',
    info2:
      'App was developed with Angular@9, web sockets and google maps for presenting the shoppings in their location, with the number of people in each place. I has a manager page for admin users.',
    url: '',
    repo: 'https://github.com/JsBraz/ProjetoAppWeb', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/php_app.jpg',
    title: 'Videogame Renting',
    info:
      'Simple web page for displaying and rent videogames. It has login, register and cart functionality.',
    info2:
      'It uses different databases for store the data, like PostgreSQL and MySql. It uses php as the main programming language, and is as a full-stack implementation using the php framework "Laravel".',
    url: '',
    repo: 'https://github.com/RetlavSource/Project_LabPro/tree/v1.0', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/spring_app.jpg',
    title: 'Appointment API',
    info:
      'Project for the subject "Software Engineering", that implements a web service for making appointments/attendances for the different subjects on the University, as well as the location. Complements the first part of the web service, linked as "ESOF_Project" in the repository of this project.',
    info2:
      'Is a REST API service implemented in java programming language, with Spring Boot Framework, Lombok and Hibernate, returning a JSON string as the response.',
    url: '',
    repo: 'https://github.com/RetlavSource/ESOF_Project_2', // if no repo, the button will not show up
  },
];

// CERTIFICATES DATA
export const certificatesData = [
  {
    id: nanoid(),
    img: 'certificates/icaart_course.jpg',
    title: 'ICAART 2017',
    info:
      'Official Certificate of attended the ICAART 2017 - 9th International Conference on Agents and Artificial Intelligence.',
  },
  {
    id: nanoid(),
    img: 'certificates/ccp_course.jpg',
    title: 'Training of trainers course',
    info:
      'Certificate for teaching and lecturing different subjects. Upon presenting a training subject, I have competences to teach and emit certificates of the learning themes and areas.',
  },
  {
    id: nanoid(),
    img: 'certificates/cad_course.jpg',
    title: 'CAD Course',
    info:
      'Diploma of the Computer Assisted Design. Subjects where Autocad, Autocad 3D, 3D Studio Viz and Internet.',
  },
  {
    id: nanoid(),
    img: 'certificates/javascript2_course.jpg',
    title: 'Javascript Tutorial Course',
    info: 'A Javascript Tutorial Course on online learning platform of Solotearn.',
  },
  {
    id: nanoid(),
    img: 'certificates/javascript_course.jpg',
    title: 'Javascript Course',
    info: 'A Complete Javascript Course on online learning platform of Udemy.',
  },
  {
    id: nanoid(),
    img: 'certificates/nodejs_course.jpg',
    title: 'Node.Js Course',
    info: 'A Complete Node.Js Course on online learning platform of Udemy.',
  },
  {
    id: nanoid(),
    img: 'certificates/css_course.jpg',
    title: 'CSS Fundamentals Course',
    info: 'A CSS Fundamentals Course on online learning platform of Solotearn.',
  },
  {
    id: nanoid(),
    img: 'certificates/html_course.jpg',
    title: 'HTML Fundamentals Course',
    info: 'A HTML Fundamentals Course on online learning platform of Solotearn.',
  },
  {
    id: nanoid(),
    img: 'certificates/cplusplus_course.jpg',
    title: 'C++ Tutorial Course',
    info: 'A C++ Tutorial Course on online learning platform of Solotearn.',
  },
  {
    id: nanoid(),
    img: 'certificates/java_course.jpg',
    title: 'Java Tutorial Course',
    info: 'A Java Tutorial Course on online learning platform of Solotearn.',
  },
  {
    id: nanoid(),
    img: 'certificates/php_course.jpg',
    title: 'PHP Tutorial Course',
    info: 'A PHP Tutorial Course on online learning platform of Solotearn.',
  },
  {
    id: nanoid(),
    img: 'certificates/sql_course.jpg',
    title: 'SQL Fundamentals Course',
    info: 'A SQL Fundamentals Course on online learning platform of Solotearn.',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in my help and skills? Awesome!',
  btn: 'Email Me',
  email: 'valterinfomundo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCVR4fv-CMDxrLdSbDi8B5uw/videos',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/valternunocardoso/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RetlavSource',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
