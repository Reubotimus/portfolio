import { IoIosArrowBack } from "react-icons/io";
import React from 'react'
import VideoSln from "../../components/video";
import Link from "next/link";
import Image from "next/image";
import hypercubeImg from './../../../../public/hypercube.png'

const hypercubeprojectPage = () => { 

  return (
    <div className="py-10 px-1 md:px-20 lg:px-36 max-w-6xl mx-auto">
      <Link href={'/portfolio'}>
        <button className="hover:text-teal-600 pb-5">
          <div className="flex flex-row items-center -m-1.5">
            <div className="text-xl ">
              <IoIosArrowBack/>
            </div>
            <h1 className="text-lg">Back</h1>
          </div>
        </button>
      </Link>
      <div className="flex flex-col justify-center">
        <div className="pb-1">
          <h1 className="font-mono text-2xl">Hypercube Project</h1>
          <p className="text-xs"><strong>Date: </strong>1/2021 - 2/2021</p>
          <p className="text-xs"><strong>Group: </strong>Harris Perdis, William Zhang, James Vereker, Regan Harper</p>
          <p className="text-xs"><strong>Github: </strong><Link className='underline hover:text-teal-600' href={'https://github.com/HarrisAsync/HyperCubeProject'}>Link</Link></p>
          <p className="text-xs"><strong>Hypercube Website: </strong><Link className='underline hover:text-teal-600' href={'https://harrisasync.github.io/HyperCubeProject/'}>Link</Link></p>
          <p className="text-xs"><strong>Client YT Channel: </strong><Link className='underline hover:text-teal-600' href={'https://youtube.com/@Mathologer'}>Link</Link></p>
        </div>
        
        <Image src={hypercubeImg} className="w-full" alt='Hypercube website home'/>
        
        <h1 className="font-mono text-xl pt-5">Project Description</h1>
        <p className="pl-2">
          A group project focused on mathematics education using visualisations. Made by Monash University students that love math and have too much time on their hands. This website was inspired by Burkard Polster&apos;s MTH2132 class, where he discussed fun problems with awesome solutions. The link to the website can be found above!
        </p>

        <h1 className="font-mono text-xl pt-5">Development Stages</h1>
        <ul className="text-md pl-2 list-inside">
          <li><strong>Ideation</strong> - Inspired by a mathematics class and the covid pandemic</li>
          <li><strong>Task management</strong> - Tasks are outlined on a word document</li>
          <li><strong>Choosing topics</strong> - Picked 4 topics to create visualisations on</li>
          <li><strong>Writing animation for topics</strong> - Each member was given a topic</li>
          <li><strong>Creating bootstrap site</strong> - Made the site responsive and added extra touches</li>
          <li><strong>Testing</strong> - Tested animations and site responsiveness</li>
        </ul>

        <h1 className="font-mono text-xl pt-5">Skills Learnt</h1>
        <ul className="list-disc list-inside pl-2">
          <li>Using Bootstrap</li>
          <li>Working in a team</li>
          <li>Using P5js</li>
          <li>Communicating with client</li>
          <li>Git</li>
        </ul>

        <h1 className="font-mono text-xl pt-5">Architecture</h1>
        <p className="pl-2">
          This project heavily used p5.js and plain Javascript. At its core, p5.js simplifies the intricate process of crafting engaging visual elements by building upon the HTML5 canvas element. This library empowers creators to effortlessly bring ideas to life through an extensive set of functions, facilitating the seamless drawing of shapes, lines, and vibrant colors on the canvas. Its versatility extends beyond static visuals, as p5.js excels in fostering interactive experiences. Users can effortlessly integrate responsive elements, courtesy of mouse and keyboard input handling. p5.js provides functions for smooth transitions and frame-based rendering.
        </p>
      </div>
    </div>
  )

}

export default hypercubeprojectPage