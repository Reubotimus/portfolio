import ProjectDTO from "../models/ProjectDTO";

const tags = [
  "Bootstrap",
  "Javascript",
  "P5js",
  "Python",
  "OpenCV",
  "Swift",
  "SwiftUI",
  "Google Firebase",
  "Google OR-tools",
  "Vega-Lite",
  "Git",
  "UI Design",
  "HTML",
  "CSS",
  "Forecasting",
  "Optimisation",
  "Azure functions",
  "Fastapi",
];

const vicCameraLocationsData = {
  name: "Vic-Roads-Cameras",
  type: "Python App",
  card: {
    title: "Vic-Roads-Cameras",
    date: "2/2025",
    description:
      "Built with my friend Reuben Cook, this project displays mobile camera locations in Victoria, scraped every 2 days from the VIC Roads website. The data is stored in a PostgreSQL database, and the scraper is an Azure Function. The website is built using FastAPI and Python.",
    slug: "vic-camera-locations",
    image: "/vic-camera-site.png",
    imageAlt: "Screenshot of VIC Camera Locations website",
    tags: [tags[1], tags[3], tags[10], tags[12], tags[16], tags[17]],
  },
  date: "2/2025",
  members: [
    "Harris Perdis [Software Developer]",
    "Reuben Cook [Software Developer]",
  ],
  links: [
    {
      name: "GITHUB",
      link: "https://github.com/HarrisAsync/vic-camera-locations",
      private: false,
    },
    {
      name: "WEBSITE",
      link: "https://vic-roads-cameras.com",
      private: false,
    },
  ],
  description:
    "This project displays mobile camera locations in Victoria, scraped from the VIC Roads website every 2 days. The data is stored in a PostgreSQL database, with the scraper running as an Azure Function. The website is built with FastAPI in Python.",
  stages: [
    {
      title: "Ideation",
      detail: "Initial planning and defining the scope of the project.",
    },
    {
      title: "Web Scraping Setup",
      detail:
        "Developed the Azure Function to scrape data from the VIC Roads website.",
    },
    {
      title: "Database Integration",
      detail:
        "Created and integrated the PostgreSQL database to store the scraped data.",
    },
    {
      title: "FastAPI Development",
      detail: "Built the FastAPI web app to serve the camera locations data.",
    },
    {
      title: "Website Deployment",
      detail: "Deployed the website for public access and testing.",
    },
  ],
  skills: [
    "Web scraping with Azure Functions",
    "PostgreSQL integration",
    "FastAPI for web development",
    "Python programming",
    "Collaborative development",
  ],
  architecture:
    "The system is composed of an Azure Function that scrapes camera data from the VIC Roads website every 2 days. The scraped data is then stored in a PostgreSQL database. The front-end is powered by FastAPI, with the back-end responsible for handling requests and serving data to users. The system was designed for reliability, scalability, and ease of maintenance.",
  media: {
    images: ["/vic-camera-site.png"],
  },
  challenges: [
    "Ensuring accurate and up-to-date scraping of data from the VIC Roads website.",
    "Managing the synchronization of scraped data with the website.",
    "Optimizing the FastAPI app for scalability.",
  ],
  futureImprovements: [
    "Add real-time updates for camera locations.",
    "Improve data visualization and interactivity on the website.",
    "Expand the scope to include additional traffic data.",
  ],
  keyTakeaways: [
    "Gained experience with web scraping and automation using Azure Functions.",
    "Developed a deep understanding of FastAPI for building web apps.",
    "Collaborated effectively with a teammate on a full-stack project.",
  ],
};

const drowzalertData = {
  name: "Drowzalert",
  type: "Python App",
  card: {
    title: "Drowzalert",
    date: "2/2023",
    description:
      "As part of a small group, I competed in a 48hr hackathon hosted by UNIHACK. We developed a python app to detect closed eyelids as an early sign of drowsiness and fatigue in drivers, using OpenCV and pre-trained models.",
    slug: "drowzalert",
    image: "/drowzalert.jpeg",
    imageAlt: "Photo of eyelids outlined",
    tags: [tags[3], tags[4], tags[10]],
  },
  date: "2/2023",
  members: [
    "Harris Perdis [Computer Science Student]",
    "Hung Ba Huynh [Computer Science Student]",
    "Jack Zheng [Computer Science Student]",
    "William Zhang [Engineering Student]",
    "Swathi Subramanyan [IT Student]",
    "Roshan Ravikumar [IT Student]",
  ],
  links: [
    {
      name: "GITHUB",
      link: "https://github.com/HarrisAsync/drowzalert",
      private: false,
    },
    {
      name: "DEVPOST",
      link: "https://devpost.com/software/sleepy_driver_detector",
      private: false,
    },
  ],
  award: "3rd place at UNIHACK with a cash prize.",
  description:
    "As part of a small group, I competed in a 48-hour hackathon hosted by UNIHACK. We developed a Python app to detect closed eyelids as an early sign of drowsiness and fatigue in drivers, using OpenCV and pre-trained models.",
  stages: [
    {
      title: "Ideation",
      detail: "Overall app scope and purpose were generated.",
    },
    {
      title: "Task Management",
      detail: "Tasks were outlined on a Trello board.",
    },
    {
      title: "Research",
      detail: "Explored potential solutions to the problem.",
    },
    {
      title: "Python CV Logic for Webcam",
      detail: "Implemented Python logic to access and process webcam footage.",
    },
    {
      title: "Integration with Pre-trained Model",
      detail: "Fed frame data into an eyelid tracking model.",
    },
    {
      title: "Logic for Closed Eyes",
      detail: "Differentiated between closed, open, and blinking eyes.",
    },
    {
      title: "Refinement",
      detail: "Adjusted logic for distinguishing between eye states.",
    },
  ],
  skills: [
    "Working in a team",
    "Project management",
    "Using Python with webcam integration",
    "OpenCV and dlib",
  ],
  architecture:
    "The application was prototyped on a laptop using an integrated webcam to capture live footage of the driver. We used facial landmarks to detect eyelid positions. These landmarks were formed via a series of points tracked through space and specifically mapped to the eyes. The Python libraries OpenCV (for camera access and image processing) and dlib (for facial landmark detection) were crucial for this operation.",
  media: {
    images: ["/drowzalert.jpeg"],
    video: "https://youtu.be/7isfUSZ16ZI",
  },
  challenges: [
    "Fine-tuning eyelid detection for varying lighting conditions.",
    "Integrating pre-trained models with real-time footage.",
    "Managing team collaboration under a strict 48-hour deadline.",
  ],
  futureImprovements: [
    "Optimize eyelid tracking for lower-quality webcams.",
    "Enhance the model to detect additional signs of drowsiness.",
    "Develop a mobile-friendly version of the application.",
  ],
  keyTakeaways: [
    "Learned efficient use of OpenCV and dlib for real-time applications.",
    "Strengthened problem-solving skills under a tight deadline.",
    "Gained experience in collaborative development during hackathons.",
  ],
};

const hypercubeprojectData = {
  name: "Hypercube Project",
  type: "Website + Visualisations",
  card: {
    title: "Hypercube Project",
    date: "1/2021 - 2/2021",
    description:
      "This project aimed at digitising complex topics from a university mathematics class. It allowed users to explore concepts using interactive animations. I communicated with our client Prof. Burkard Polster also known as Mathologer on YouTube. He currently uses the interactive visualisations for lecturing purposes.",
    slug: "hypercubeproject",
    image: "/hypercube.png",
    imageAlt: "Hypercube website home",
    tags: [tags[0], tags[1], tags[12], tags[13], tags[2], tags[10]],
  },
  date: "1/2021 - 2/2021",
  members: [
    "Harris Perdis [Computer Science Student]",
    "William Zhang [Engineering Student]",
    "James Vereker [Computer Science Student]",
    "Regan Harper [IT Student]",
  ],
  links: [
    {
      name: "GITHUB",
      link: "https://github.com/HarrisAsync/HyperCubeProject",
      private: false,
    },
    {
      name: "WEBSITE",
      link: "https://harrisasync.github.io/HyperCubeProject/",
      private: false,
    },
    {
      name: "CLIENT YT",
      link: "https://youtube.com/@Mathologer",
      private: false,
    },
  ],
  description:
    "A group project focused on mathematics education using visualizations. Made by Monash University students that love math and have too much time on their hands. This website was inspired by Burkard Polster's MTH2132 class, where he discussed fun problems with awesome solutions.",
  stages: [
    {
      title: "Ideation",
      detail: "Inspired by a mathematics class and the covid pandemic.",
    },
    {
      title: "Task Management",
      detail: "Tasks are outlined on a Word document.",
    },
    {
      title: "Choosing Topics",
      detail: "Picked 4 topics to create visualizations on.",
    },
    {
      title: "Writing Animations",
      detail: "Each member was given a topic to animate.",
    },
    {
      title: "Creating Bootstrap Site",
      detail: "Made the site responsive and added extra touches.",
    },
    {
      title: "Testing",
      detail: "Tested animations and site responsiveness.",
    },
  ],
  skills: [
    "Using Bootstrap",
    "Working in a team",
    "Using P5.js",
    "Communicating with client",
    "Git",
  ],
  architecture:
    "This project heavily used p5.js and plain JavaScript. At its core, p5.js simplifies the intricate process of crafting engaging visual elements by building upon the HTML5 canvas element. This library empowers creators to effortlessly bring ideas to life through an extensive set of functions, facilitating the seamless drawing of shapes, lines, and vibrant colors on the canvas. Its versatility extends beyond static visuals, as p5.js excels in fostering interactive experiences. Users can effortlessly integrate responsive elements, courtesy of mouse and keyboard input handling. p5.js provides functions for smooth transitions and frame-based rendering.",
  media: {
    images: ["/hypercube.png"],
  },
  challenges: [
    "Integrating animations with mathematical concepts.",
    "Ensuring browser compatibility for animations.",
    "Managing team collaboration during the pandemic.",
  ],
  futureImprovements: [
    "Add more visualizations for additional mathematical concepts.",
    "Improve mobile responsiveness for better accessibility.",
    "Optimize animations for better performance.",
  ],
  keyTakeaways: [
    "Improved skills in animation and interactivity with P5.js.",
    "Gained valuable teamwork and collaboration experience.",
    "Learned how to integrate client feedback effectively.",
  ],
};

const matchiosData = {
  name: "MatchIOS",
  type: "iOS APP",
  card: {
    title: "MatchIOS",
    date: "1/2023 - 6/2023",
    description:
      "This partially completed project aimed at releasing an IOS app that can connect people to play sports, coordinate team play and share a sports resume. This app had functional account login, signup and forgot processes.",
    slug: "matchios",
    image: "/matchIOS.png",
    imageAlt: "Photo of app pages",
    tags: [tags[5], tags[6], tags[7], tags[11], tags[10]],
  },
  date: "1/2023 - 6/2023",
  members: [
    "Harris Perdis [Software Developer]",
    "Nick Miller [UI/UX Designer]",
  ],
  links: [
    {
      name: "GITHUB",
      link: "",
      private: true,
    },
  ],
  description:
    "This partially completed project aimed at releasing an IOS app that can connect people to play sports, coordinate team play and share a sports resume. This app had functional account login, signup and forgot processes.",
  stages: [
    {
      title: "Ideation",
      detail: "Overall app scope and purpose is generated.",
    },
    { title: "UI design", detail: "Outlined within Adobe XD." },
    {
      title: "Component design",
      detail: "UI elements are built for reusability.",
    },
    {
      title: "Integrating components",
      detail: "Pages are created and layout of app.",
    },
    {
      title: "Creating Bootstrap Site",
      detail: "Made the site responsive and added extra touches.",
    },
    { title: "Navigation", detail: "A navigation stack was implemented." },
    { title: "UI logic", detail: "Logic and functionality for UI is built." },
    {
      title: "Intergating Google Firebase",
      detail: "Input handling, API handling, Backend setup.",
    },
    {
      title: "Basic Testing",
      detail: "Testing functions with fake data and play testing UI.",
    },
  ],
  skills: [
    "Creating custom UI",
    "Managing state",
    "Handling asynchronous requests",
    "Programming with swift",
    "Using google firebase auth and store",
  ],
  architecture:
    "Within Swift, views act as the fundamental building blocks and define the visual layout and appearance of the user interface. ViewModels contribute to a well-organized separation of concerns by managing presentation logic and data. Models encapsulate the application, data and business logic. Navigation within the Match app is seamlessly facilitated by a custom system, employing a navigation stack and store, ensuring smooth transitions between screens. Reusable components, designed as Views, enhance modularity throughout the app. Routing is efficiently handled through state variables, providing precise control over navigation state.",
  media: {
    images: ["/matchIOS.png"],
    video: "https://youtu.be/rWx8ZFPvMgM?si=Bz1qMDcR6Ae7Msup",
  },
  challenges: [
    "Managing state across multiple screens without causing performance issues.",
    "Ensuring smooth navigation transitions between app sections while maintaining performance.",
    "Integrating Firebase services effectively for real-time data handling and user authentication.",
    "Balancing between reusable UI components and app-specific customization.",
    "Testing across multiple devices to ensure consistency in user experience.",
  ],
  futureImprovements: [
    "Enhancing the user interface with more advanced animations and transitions.",
    "Adding additional features for better user engagement, such as messaging and event creation.",
    "Improving error handling and providing more robust user feedback in case of API failures.",
    "Optimizing app performance by minimizing the number of asynchronous calls and reducing load times.",
    "Expanding Firebase integration to include additional services like Firebase Cloud Messaging and Firestore for real-time data.",
  ],
  keyTakeaways: [
    "The importance of keeping the user interface both functional and aesthetically appealing.",
    "Building modular, reusable components saves time and effort in larger projects.",
    "Smooth state management is key for a seamless user experience, especially in apps with complex navigation.",
    "Firebase is a powerful tool, but requires careful integration to avoid issues with data handling.",
    "Testing early and often can prevent critical issues from arising later in the development cycle.",
  ],
};

const tinygridData = {
  name: "Tinygrid",
  type: "Python App",
  card: {
    title: "Tinygrid",
    date: "2/2022 - 10/2022",
    description:
      "The goal of this project was to develop an optimal battery and lecture schedule based on the predictions of future energy demand and production. I primarily worked on the optimisation and web part of the project, which used linear programming techniques and javascript.",
    slug: "tinygrid",
    image: "/tinygrid5.png",
    imageAlt: "Photo of tinygrid dashboard",
    tags: [
      tags[0],
      tags[1],
      tags[12],
      tags[13],
      tags[3],
      tags[8],
      tags[9],
      tags[14],
      tags[15],
      tags[10],
    ],
  },
  date: "2/2022 - 10/2022",
  members: [
    "Harris Perdis [Computer Science Student]",
    "Hung Ba Huynh [Computer Science Student]",
    "Aldrich Lado Buntoro [Computer Science Student]",
    "Anirudh Prakash [Computer Science Student]",
  ],
  links: [
    {
      name: "GITHUB",
      link: "https://github.com/hbhungg/tinygrid",
      private: false,
    },
  ],
  description:
    "The Tinygrid project aimed to tackle the Monash micro-grid competition, supervised by Dr. Christoph Bergmeir. The team focused on reducing the net energy usage of Monash Clayton campus by forecasting energy demand and solar production, then optimizing activity scheduling using Mixed Integer Programming (MIP). Additionally, a dashboard was developed to visualize data and results from the forecasting and optimization modules.",
  stages: [
    {
      title: "Problem Understanding",
      detail:
        "Study of the Monash micro-grid competition problem, including data and constraints.",
    },
    {
      title: "Forecasting Solution",
      detail:
        "Developed a Random Forest model with Linear Regression at each node for energy demand and production forecasting.",
    },
    {
      title: "Optimization Solution",
      detail:
        "Used Simulated Annealing and MIP for activity scheduling optimization, focusing on minimizing energy consumption.",
    },
    {
      title: "Dashboard Development",
      detail:
        "Created a web dashboard to present project data, forecasting results, and optimization outcomes.",
    },
    {
      title: "Evaluation",
      detail:
        "Evaluated the solution by comparing it to a fast, yet suboptimal solution and calculating the MASE score.",
    },
  ],
  skills: [
    "Working in a team",
    "Project management",
    "Creating a Python library",
    "Data wrangling",
    "Constraint problem-solving algorithms",
    "Website design",
    "Using HTML and CSS",
  ],
  architecture:
    "The project utilized a Random Forest model for forecasting energy demand and solar production. For optimization, Mixed Integer Programming (MIP) was employed to schedule activities while minimizing energy usage. A simple web dashboard was created using HTML and CSS to display the project's data and results. The optimization problem involved timetabling activities with constraints, solved through a combination of MIP and Simulated Annealing.",
  media: {
    images: [
      "/tinygrid.png",
      "/tinygrid3.png",
      "/tinygrid4.png",
      "/tinygrid5.png",
    ],
  },
  challenges: [
    "Addressing the NP problem of minimizing energy usage within the time constraints of the competition.",
    "Integrating forecasting and optimization modules to work cohesively.",
    "Designing and implementing a functional web dashboard to present complex data in an accessible way.",
    "Managing team dynamics and ensuring timely completion of the project.",
  ],
  futureImprovements: [
    "Refining the Random Forest model for even better forecasting accuracy.",
    "Exploring additional optimization techniques to improve scheduling efficiency.",
    "Expanding the dashboard to include more interactive features and visualizations.",
    "Optimizing the Python library for wider usage and easier integration.",
  ],
  keyTakeaways: [
    "Complex problems in energy optimization require careful use of heuristics and optimization algorithms.",
    "Team collaboration and effective project management are crucial in delivering complex solutions within deadlines.",
    "Python libraries can be a great way to share solutions for specific challenges, making it easier for experts to utilize the work.",
    "Web dashboards play an important role in presenting complex data and results to users in an understandable format.",
  ],
};

const projects = [
  vicCameraLocationsData as ProjectDTO,
  matchiosData as ProjectDTO,
  drowzalertData as ProjectDTO,
  tinygridData as ProjectDTO,
  hypercubeprojectData as ProjectDTO,
];

export default projects;
