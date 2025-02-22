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
  name: "vic-camera-locations",
  type: "Python App",
  headLineImage: {
    url: "/vic-camera-site.png",
    width: 1909,
    height: 1187,
  },
  card: {
    title: "vic-camera-locations",
    date: "2/2025",
    slug: "vic-camera-locations",
    image: { url: "/vic-camera-site.png", width: 1909, height: 1187 },
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
  rows: [
    {
      cells: [
        {
          paragraph: {
            title: "Project Description",
            body: "This project outlines roads within Victoria, Australia where mobile speed and seatbelt / phone cameras are possibly parked or stationed. The vic roads website is typically updated monthly, with excel sheets which contain the columns road and suburb. Our website periodically scrapes for this data and updates tables within the database with this information.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Architecture",
            body: "The website comprises of three elements: an api built with fastapi, azure function and postgreSQL database. The language used in these elements is python. The azure function performs the scrapping function. It only attempts to fetch the url from the vic roads website and subsequently performs a post request to the api. When the api receives the post request, it downloads the excel sheets in memory. There is minimal lenience when selecting and finding the data. If the initial data pattern within the sheet changes, the post endpoint will fail. This was chosen as a result of time constraints.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-diagram.svg",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "Once the data is parsed into arrays, the road and suburb pairs are checked to ensure that they do not currently exist in the database. If they do exist, a request to find the bounding box of the suburb is sent to overpass. Overpass is a free api which contains information for suburbs, roads, landmarks, etc. We then send another request to overpass with the suburb bounding box to retrieve the road line coordinates.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "Using google maps api and these road coordinates, we draw on the map blue and red lines to signify either mobile speed and seatbelt / phone cameras, respectively. This page is served statically via the api.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-redline.png",
            width: 2874,
            height: 1468,
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-blueline.png",
            width: 2876,
            height: 1624,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Team Work",
            body: "We completed this project using git for source control and discord for commutation. We worked on a single branch due to a large enough separation of concerns. Reuben Cook, a work colleague, was easy to work with and was knowledgeable. He scripted the database and overpass logic, whilst I scripted the scrapping and post endpoint logic. We primarily worked together on video call after work hours to complete this project.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Future Improvements and Challenges",
            body: "In future, we plan to enhance the website by integrating fixed camera points on the map, along with a feature that allows users to report sightings of mobile cameras. This will enable real-time updates and greater accuracy. At our workplace, we predominantly work with typed languages, and as we developed and ran the project, we quickly realised the significant benefits of explicit typing. We slowly began using explicit typing within python to some extent, but not throughout. There is an ongoing technical challenge with retrieving overpass data, specifically for certain roads or suburbs. This issue results in missing data on the map. We're actively working on resolving this to ensure better data reliability going forward.",
          },
        },
      ],
    },
  ],
};

const projects: ProjectDTO[] = [vicCameraLocationsData];

export default projects;
