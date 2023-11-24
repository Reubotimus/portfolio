import { IoIosArrowBack } from "react-icons/io";
import React from 'react'
import VideoSln from "../../components/video";
import Link from "next/link";


const drowzalertPage = () => { 

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
          <h1 className="font-mono text-2xl">Drowzalert</h1>
          <p className="text-xs"><strong>Date: </strong>2/2023</p>
          <p className="text-xs"><strong>Group: </strong>Harris Perdis, Hung Ba Huynh, Jack Zheng, William Zhang, Swathi Subramanyan, Roshan Ravikumar</p>
          <p className="text-xs"><strong>Github: </strong><Link className='underline hover:text-teal-600' href={'https://github.com/HarrisAsync/drowzalert'}>Link</Link></p>
          <p className="text-xs"><strong>DevPost: </strong><Link className='underline hover:text-teal-600' href={'https://devpost.com/software/sleepy_driver_detector'}>Link</Link></p>
          <p className="text-xs"><strong>UNIHACK Award: </strong>3<sup>rd</sup> place & cash prize</p>     
        </div>
        
        <VideoSln url={'https://youtu.be/7isfUSZ16ZI'}/>
        
        <h1 className="font-mono text-xl pt-5">Project Description</h1>
        <p className="pl-2">
          As part of a small group, I competed in a 48hr hackathon hosted by UNIHACK. We developed a python app to detect closed eyelids as an early sign of drowsiness and fatigue in drivers, using OpenCV and pre-trained models.
        </p>

        <h1 className="font-mono text-xl pt-5">Development Stages</h1>
        <ul className="text-md pl-2 list-inside">
          <li><strong>Ideation</strong> - Overall app scope and purpose is generated</li>
          <li><strong>Task management</strong> - Tasks are outlined on trello board</li>
          <li><strong>Research</strong> - Look for solutions to problem</li>
          <li><strong>Python CV logic for webcam</strong> - Implement python logic</li>
          <li><strong>Integration with pre-trained model</strong> - Feed frame data to into eye-lid tracking model</li>
          <li><strong>Logic for closed eyes</strong> - Differentiate between closed, open & blinking eyes</li>
          <li><strong>Refinement</strong> - Adjust logic for closed/open eyes</li>
        </ul>

        <h1 className="font-mono text-xl pt-5">Skills Learnt</h1>
        <ul className="list-disc list-inside pl-2">
          <li>Working in a team</li>
          <li>Project management</li>
          <li>Using webcam within python</li>
        </ul>

        <h1 className="font-mono text-xl pt-5">Architecture</h1>
        <p className="pl-2">
          The application was prototyped on a laptop using an integrated webcam to capture the live footage of the driver. We used the concept of facial landmarks to detect the closed position of the eyelids. These landmarks were formed via a series of points that were tracked through space and specifically mapped to the eyes. The Python libraries, OpenCV (to provide access to the camera and image augmentation) and dlib (to track facial landmarks) were leveraged for this operation.
        </p>
      </div>
    </div>
  )

}

export default drowzalertPage