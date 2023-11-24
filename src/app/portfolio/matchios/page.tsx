import { IoIosArrowBack } from "react-icons/io";
import React from 'react'
import VideoSln from "../../components/video";
import Link from "next/link";
import Image from "next/image";

const matchiosPage = () => { 

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
          <h1 className="font-mono text-2xl">MatchIOS</h1>
          <p className="text-xs"><strong>Date: </strong>1/2023 - 6/2023</p>
          <p className="text-xs"><strong>Group: </strong>Harris Perdis, Nick Miller, Hung Ba Huynh</p>
          <p className="text-xs"><strong>Github: </strong>Private</p>     
        </div>

        <VideoSln url={'https://www.youtube.com/embed/rWx8ZFPvMgM?si=szY_wRhoru43dgY1'}/>
        
        <h1 className="font-mono text-xl pt-5">Project Description</h1>
        <p className="pl-2">
          This partially completed project aimed at releasing an IOS app that can connect people to play sports, coordinate team play and share a sports resume. This app had functional account login, signup and forgot processes.
        </p>
        <h1 className="font-mono text-xl pt-5">Development Stages</h1>
        <ul className="text-md pl-2 list-inside">
          <li><strong>Ideation</strong> - Overall app scope and purpose is generated</li>
          <li><strong>UI design</strong> - Outlined within Adobe XD</li>
          <li><strong>Component design</strong> - UI elements are built for reusability</li>
          <li><strong>Integrating components</strong> - Pages are created and layout of app</li>
          <li><strong>Navigation</strong> - A navigation stack is implemented</li>
          <li><strong>UI logic</strong> - Logic and functionality for UI is built</li>
          <li><strong>Intergating Google Firebase</strong> - Input handling, API handling, Backend setup</li>
          <li><strong>Basic Testing</strong> - Testing functions with fake data and play testing UI</li>
        </ul>

        <h1 className="font-mono text-xl pt-5">Skills Learnt</h1>
        <ul className="list-disc list-inside pl-2">
          <li>Creating custom UI</li>
          <li>Managing state</li>
          <li>Handling asynchronous requests</li>
          <li>Programming with swift</li>
          <li>Using google firebase auth and store</li>
        </ul>

        <h1 className="font-mono text-xl pt-5">Architecture</h1>
        <p className="pl-2">
          Within Swift, views act as the fundamental building blocks and define the visual layout and appearance of the user interface. ViewModels contribute to a well-organized separation of concerns by managing presentation logic and data. Models encapsulate the application&apos;s data and business logic. Navigation within the Match app is seamlessly facilitated by a custom system, employing a navigation stack and store, ensuring smooth transitions between screens. Reusable components, designed as Views, enhance modularity throughout the app. Routing is efficiently handled through state variables, providing precise control over navigation state.
        </p>

        <div>
          <h1 className="font-mono text-xl pt-5">Image Set</h1>
          <div className="rounded overflow-hidden">
            <Image src={'/matchIOS.png'} width={1920} height={1080} className="w-full h-auto rounded-lg" alt="matchIOS image" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default matchiosPage