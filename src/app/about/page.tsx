import PortfolioLink from "../components/PortfolioLink";

const AboutPage = () => {
  return (
    <div className="py-10 px-5 md:px-15 lg:px-15 max-w-6xl mx-auto">
      <div>
        <h3 className="text-2xl text-teal-600 font-mono">Career Objective</h3>
        <p className="text-md py-5 leading-8 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
          I am a passionate software developer with a strong focus on creating
          innovative web applications that drive impactful results. My journey
          through both frontend and backend technologies has equipped me with a
          versatile skill set. I am eager to leverage my expertise in{" "}
          <span className="text-teal-600">web development</span> and{" "}
          <span className="text-teal-600 dark:text-teal-200">data science</span>{" "}
          to contribute to projects that challenge me and make a difference in
          the tech landscape.
        </p>
      </div>

      <h3 className="text-2xl text-teal-600 font-mono">My Journey</h3>
      <div className="pl-5 pt-5">
        <ol className="relative border-s border-gray-200">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              2013 - 2018
            </time>
            <h3 className="text-lg font-semibold">Haileybury College - VCE</h3>
            <p className="mb-4 text-base font-normal">
              During my VCE, I delved into software development, crafting my
              first large-scale application using C# and Microsoft Forms. This
              hands-on project sparked my passion for technology and laid the
              foundation for my journey into the software development world.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              2019 - 2023
            </time>
            <h3 className="text-lg font-semibold">
              Monash University - Bachelor of Science and Computer Science
            </h3>
            <p className="text-base font-normal">
              My degree in Computer Science and Mathematics has enriched my
              understanding of algorithms, data structures, and machine
              learning, while also grounding me in the theory behind web
              technologies. The Mathematics portion of the degree, which focused
              on advanced topics like linear algebra, calculus, network
              mathematics, and complex analysis, has sharpened my
              problem-solving abilities. This foundation in mathematics has
              proven invaluable for optimizing software performance and building
              efficient systems.
            </p>
            <p className="text-base font-normal mt-4">
              I applied these skills in a year-long university project,
              optimizing energy consumption on the Monash Clayton campus, which
              deepened my interest in building impactful, efficient software
              systems.
            </p>
            <p className="mt-4">
              <strong>Skills:</strong> Python, SQL, Data Analysis, Machine
              Learning, Algorithms and Data Structures, Databases, Advanced
              Mathematics.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              Jan 2024 - Current
            </time>
            <h3 className="text-lg font-semibold">
              Asta - Junior Software Developer
            </h3>
            <p className="text-base font-normal">
              In my current role at Asta, I have honed my skills in both
              frontend and backend development, working with a range of modern
              web technologies including React, .NET APIs, and Azure. I’ve
              contributed to building scalable web applications and have
              collaborated closely with clients from diverse industries,
              including education, concrete manufacturing, and small businesses.
              This role has refined my ability to deliver high-quality solutions
              and reinforced my passion for creating seamless user experiences.
            </p>
            <p className="mt-4">
              <strong>Skills:</strong> React, .NET, Azure Functions, Frontend
              Development, Razor Pages, Javascript, C#.
            </p>
          </li>
        </ol>
        <PortfolioLink />
      </div>
    </div>
  );
};

export default AboutPage;
