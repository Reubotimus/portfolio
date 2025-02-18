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

const vicCameraLocationsData: ProjectDTO = {
  name: "Vic-Roads-Cameras",
  type: "Python App",
  headLineImage: {
    url: "/vic-camera-site.png",
    width: 800,
    height: 600,
  },
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
  rows: [
    {
      cells: [
        {
          paragraph: {
            title: "Architecture",
            body: "The system is composed of an Azure Function that scrapes camera data from the VIC Roads website every 2 days. The scraped data is then stored in a PostgreSQL database. The front-end is powered by FastAPI, with the back-end responsible for handling requests and serving data to users. The system was designed for reliability, scalability, and ease of maintenance.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site.png",
            width: 800,
            height: 600,
          },
        },
        {
          paragraph: {
            body: "The system is composed of an Azure Function that scrapes camera data from the VIC Roads website every 2 days. The scraped data is then stored in a PostgreSQL database. The front-end is powered by FastAPI, with the back-end responsible for handling requests and serving data to users. The system was designed for reliability, scalability, and ease of maintenance.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "The system is composed of an Azure Function that scrapes camera data from the VIC Roads website every 2 days. The scraped data is then stored in a PostgreSQL database. The front-end is powered by FastAPI, with the back-end responsible for handling requests and serving data to users. The system was designed for reliability, scalability, and ease of maintenance.",
          },
        },
        {
          image: {
            url: "/vic-camera-site.png",
            width: 800,
            height: 600,
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site.png",
            width: 800,
            height: 600,
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site.png",
            width: 800,
            height: 600,
          },
        },
        {
          image: {
            url: "/vic-camera-site.png",
            width: 800,
            height: 600,
          },
        },
      ],
    },
  ],
  skills: [
    "Web scraping with Azure Functions",
    "PostgreSQL integration",
    "FastAPI for web development",
    "Python programming",
    "Collaborative development",
  ],
  challenges: [
    "Ensuring accurate and up-to-date scraping of data from the VIC Roads website.",
    "Managing the synchronization of scraped data with the website.",
    "Optimizing the FastAPI app for scalability.",
  ],
  keyTakeaways: [
    "Gained experience with web scraping and automation using Azure Functions.",
    "Developed a deep understanding of FastAPI for building web apps.",
    "Collaborated effectively with a teammate on a full-stack project.",
  ],
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
};

const drowzalertData: ProjectDTO = {
  name: "Drowzalert",
  type: "Python App",
  headLineImage: {
    url: "/drowzalert.jpeg",
    width: 800,
    height: 600,
  },
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
  description:
    "As part of a small group, I competed in a 48-hour hackathon hosted by UNIHACK. We developed a Python app to detect closed eyelids as an early sign of drowsiness and fatigue in drivers, using OpenCV and pre-trained models.",
  rows: [
    {
      cells: [
        {
          paragraph: {
            title: "Architecture",
            body: "The application was prototyped on a laptop using an integrated webcam to capture live footage of the driver. We used facial landmarks to detect eyelid positions. These landmarks were formed via a series of points tracked through space and specifically mapped to the eyes. The Python libraries OpenCV (for camera access and image processing) and dlib (for facial landmark detection) were crucial for this operation.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/drowzalert.jpeg",
            width: 800,
            height: 600,
          },
        },
      ],
    },
  ],
  skills: [
    "Working in a team",
    "Project management",
    "Using Python with webcam integration",
    "OpenCV and dlib",
  ],
  challenges: [
    "Fine-tuning eyelid detection for varying lighting conditions.",
    "Integrating pre-trained models with real-time footage.",
    "Managing team collaboration under a strict 48-hour deadline.",
  ],
  keyTakeaways: [
    "Learned efficient use of OpenCV and dlib for real-time applications.",
    "Strengthened problem-solving skills under a tight deadline.",
    "Gained experience in collaborative development during hackathons.",
  ],
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
};

// Repeat the same transformation for the other projects (hypercubeprojectData, matchiosData, tinygridData)

const projects: ProjectDTO[] = [
  vicCameraLocationsData,
  drowzalertData,
  // Add the other transformed projects here
];

export default projects;
