import ProjectDTO from "../models/ProjectDTO";

const tags = [
  "Javascript",
  "Python",
  "OpenCV",
  "Git",
  "HTML",
  "CSS",
  "Azure functions",
  "Fastapi",
  "AWS Lambda",
  "Pocket Base",
  "Next.js",
  "Tailwind"
];

const vicCameraLocationsData: ProjectDTO = {
  name: "vic-camera-locations",
  type: "Python API",
  headLineImage: {
    url: "/vic-camera-site.png",
    width: 1400,
    height: 800,
  },
  card: {
    title: "vic-camera-locations",
    date: "2/2025",
    slug: "vic-camera-locations",
    image: { url: "/vic-camera-site.png", width: 1400, height: 800 },
    tags: [tags[0], tags[1], tags[3], tags[4], tags[5], tags[6], tags[7]],
  },
  date: "2/2025",
  members: [
    "Reuben Cook [Software Developer]",
    "Harris Perdis [Software Developer]",
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
            body: "This project outlines roads within Victoria, Australia where mobile speed and seatbelt / phone cameras are possibly parked or stationed. The official vic roads website is typically updated monthly, with excel sheets which contain the columns road and suburb. Our website periodically scrapes and transforms that data into coordinates to display them on a map.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Architecture",
            body: "The website comprises of three elements: an api built with fastapi, azure function and postgreSQL database. The language used in these elements is python. The azure function performs the scrapping, where it attempts to fetch the url from the vic roads website and subsequently performs a post request to the api. When the api receives the post request, it downloads the excel sheets in memory. There is minimal lenience when selecting and finding the data. If the initial data pattern within the sheet changes, the post endpoint will fail. This was chosen as a result of time constraints.",
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
            height: 5000,
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
            body: "Using the google maps api and these road coordinates, we draw on the map blue and red lines to signify either mobile speed and seatbelt / phone cameras, respectively. This page is served statically via the api.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-redline.png",
            width: 2880,
            height: 1800,
          },
        },
        {
          image: {
            url: "/vic-camera-site-blueline.png",
            width: 2880,
            height: 1800,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Team",
            body: "We completed this project using git for source control and discord for commutation. We worked on a single branch due to a large enough separation of concerns. Reuben Cook, a work colleague, was easy to work with and was knowledgeable. He scripted the database and overpass logic, whilst I scripted the scrapping and post endpoint logic. We primarily worked together on video call after work hours to complete this project.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Challenges",
            body: "At our workplace, we predominantly work with typed languages, and as we developed and ran the project, we quickly realised the significant benefits of explicit typing. We would find issues only at runtime and therefore spend extra time debugging. We slowly began using explicit typing within python to some extent, but not throughout. There is an ongoing technical challenge with retrieving overpass data, specifically for certain roads or suburbs. This issue results in missing lines on the map. We're actively working on resolving this issue.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Future Improvements",
            body: "In future, we plan to enhance the website by integrating fixed camera points on the map, along with a feature that allows users to report sightings of mobile cameras. The former is currently available on the vic roads official website. This will enable real-time updates and greater accuracy.",
          },
        },
        {
          image: {
            url: "/vic-camera-site-fixed.png",
            width: 2086,
            height: 1206,
          },
        },
      ],
    },
  ],
};

const toastyToes: ProjectDTO = {
  name: "Toasty Toes",
  type: "Ecommerce Store",
  headLineImage: {
    url: "/toasty-toes.png",
    width: 1920,
    height: 1080,
  },
  card: {
    title: "Toasty Toes",
    date: "10/2024",
    slug: "toasty-toes",
    image: { url: "/toasty-toes.png", width: 1920, height: 1080 },
    tags: [tags[10], tags[11], tags[9], tags[8]],
  },
  date: "10/2024",
  members: [
    "Reuben Cook [Software Developer]",
  ],
  links: [
  ],
  rows: [
    {
      cells: [
        {
          paragraph: {
            title: "Project Description",
            body: "Developed an automated ecommerce system designed to streamline order fulfillment and make store management accessible to non-technical users. The system automatically processes orders by integrating with CJ Dropshipping, eliminating the need for manual order fulfillment. Store owners can easily add and modify products without technical knowledge, ensuring a smooth operational workflow.",
          },
        },
      ],
    },
    

    {
      cells: [
        {
          paragraph: {
            title: "Architecture",
            body: "Built with Pocketbase as the CMS, chosen for its lightweight, real-time capabilities and ease of use for non-technical users. The Next.js frontend provides a fast, SEO-friendly interface, while an AWS Lambda function with Node.js monitors new orders in Pocketbase and sends them to CJ Dropshipping for automated fulfillment. ",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "All product data, orders and reviews are stored in pocket base. Next.js gets this data and allows users to create new orders. The Node.js Lambda function routinely scans the pocketbase backend and will send new orders to CJ drop shipping.",
          },
        },
        {
          image: {
            url: "/toasty-toes-architecture.png",
            width: 640,
            height: 481,
          },
        },
      ]
    },
    {
      cells: [
        {
          paragraph: {
            title: "Challenges",
            body: "Without a web designer, the front end has looked too simple or unprofessional. This was also my first project using Next.js and Tailwind CSS, as such frontend development was slow as I had to keep refering to the documentation. For future commercial projects I will employ a web designer as this will ensure a good user interface and reduce the need for rewrites.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Future Improvements",
            body: "This is still a work in progress, aiming to launch in March 2025. The next step is to finalise the design of the front end. Then once the business requirements are fulfilled, the website is ready to go live."
          }
        }
      ]
    },
    {
      cells: [
        {
          paragraph: {
            body: "After going live the next goal will be to add an admin page which will allow the admin to add products using data provided by CJ, and preview the product page. This will allow the admin to easily add new products without having to manually populate all the information and images."
          }
        }
      ]
    }
  ],
};

const projects: ProjectDTO[] = [vicCameraLocationsData, toastyToes];

export default projects;
