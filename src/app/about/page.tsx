import React from 'react'

const AboutPage = () => {

  return (
    <div className='py-10 px-5 md:px-20 lg:px-40 max-w-6xl mx-auto'>
      <div>
        <h3 className='text-2xl text-teal-600 font-mono'>Career Objective</h3>
        <p className='text-md py-5 leading-8 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left'>
        To leverage my skills and experience to pursue opportunities that challenge me intellectually and enable me to make a meaningful impact.
        I am striving for a role within the <span className='text-teal-600'>data science</span> and <span className='text-teal-600 dark:text-teal-200'>software development </span> world, where I can combine my skills honed through various software projects.
        </p>
      </div>

      <h3 className='text-2xl text-teal-600 font-mono'>Education</h3>
      <div className='pl-5 pt-5'>
        <ol className="relative border-s border-gray-200">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">2013 - 2018</time>
                <h3 className="text-lg font-semibold">Haileybury College - VCE</h3>
                <p className="mb-4 text-base font-normal">
                In VCE, I completed a software development course, where I built my first large application. This application was built using C# and Microsoft forms. It was a very challenging experience, which fueled my ambition to learn more about software development through university.
                </p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">2019 - 2023</time>
                <h3 className="text-lg font-semibold">Monash University - Bachelor of Science and Computer Science</h3>
                <p className="text-base font-normal">
                Within the Computer Science portion of the degree I learnt about a variety of algorithms and data structures, programming limitations, programming languages, big data management, data analytics, databases, modelling/simulation and machine learning. These teachings were directed into a yearlong university project centred on optimising the energy consumption of Monash Clayton campus.
                Within the Science portion of the degree, I delved into Advanced Mathematics and Physics, such as linear algebra, network mathematics, multivariable calculus, real and complex analysis, quantum/thermal mechanics and electromagnetism/optics. These topics were extremely rewarding due to their difficultly, beauty and application onto modern computer engineering.
                </p>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default AboutPage