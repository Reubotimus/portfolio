import { IoIosArrowBack } from "react-icons/io";
import React from 'react'
import Link from "next/link";
import CarouselSimple from './../../components/Carousel'

const tinygridPage = () => { 

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
          <h1 className="font-mono text-2xl">Tinygrid</h1>
          <p className="text-xs"><strong>Date: </strong>2/2022 - 10/2022</p>
          <p className="text-xs"><strong>Group: </strong>Harris Perdis, Hung Ba Huynh, Aldrich Lado Buntoro, Anirudh Prakash</p>
          <p className="text-xs"><strong>Github: </strong><Link className='underline hover:text-teal-600' href={'https://github.com/hbhungg/tinygrid'}>Link</Link></p>
        </div>
        
        <CarouselSimple/>
        
        <h1 className="font-mono text-xl pt-5">Project Description</h1>
        <div className="pl-2">
          <p>
            The project topic was based on the Monash micro-grid competition presented by IEEE-CIS for their 2021 challenge. Supervised by Dr. Christoph Bergmeir, our team aimed to overcome this challenge and include an additional dashboard for our final project. The IEEE-CIS challenge set out to reduce the net energy usage of Monash Clayton campus. This challenge proposed a mock-up scenario where the campus was restricted to building, solar, activity and battery entities. These entities had associated data, collected from the campus or invented. 
          </p>
          <div className="">
          <p className="pt-1">
            Using this data, the challenge proposed to forecast the energy demand for all buildings and the energy production by all solar panels. This data is then sent to an optimiser, which schedules activities and batteries such that the net energy consumption in the mock scenario is minimised. This is a highly complex feat and exists within the NP (Nondeterministic Polynomial-time) collection of problems. These problems cannot be completed exactly optimally within a reasonable time period, as the size of the input to the problem grows. This classification means that heuristic methods such as MIP (Mixed Integer Programming) or probabilistic algorithms are necessary. 
          </p>
          <p className="pt-1">
            Additionally, the project aimed to produce a separate web dashboard which included a brief description, the data utilised, results from the forecasting module and results from the optimiser module. This project was aptly named Tinygrid on the GitHub repository, where expert users can access our solutions to the stated problems as a Python library.
          </p>
          </div>
        </div>
        <h1 className="font-mono text-xl pt-5">Project Methods & Evaluation</h1>
        <h1 className="font-mono text-lg ">Forecasting Solution</h1>
        <p className="pl-2">
          A Random Forest model was used to solve the forcasting problem. A Random Forest is a tree based model whereby multiple nodes in a forest inherit information from their parents. It is a supervised learning algorithm that leverages multiple predictions to make a more accurate average prediction. This is a basic method which can be applied to a multitude of learning algorithms. Our team chose linear regression as the basis learning algorithm. This implied that linear regression was performed at each node in the forest. This solution rivaled the 2<sup>nd</sup> place winner of the IEEE competition based on calculating a MASE score.
        </p>
        <h1 className="font-mono text-lg ">Optimisation Solution</h1>
        <p className="pl-2">
        The second problem of the challenge was the optimisation problem. We were given the problem of timetabling a set of activities in a month, across a set of buildings, the constraint of being able to fit all recurring activities, and the cost function (objective function). Both simulated annealing and MIP were used to solve this problem, however MIP was determined to be superior. MIP is a constraint optimisation technique that minimises an objective function based on a set of equations and/or inequalities. It is an extension of the Linear Programming technique which is restricted to only continuous variables. The project solution closely followed the first place winner in the IEEE-CIS competition. The solution was evaluated by calculating the difference between our objective function output and a fast, yet bad solution. 
        </p>

        <h1 className="font-mono text-xl pt-5">Skills Learnt</h1>
        <ul className="list-disc list-inside pl-2">
          <li>Working in a team</li>
          <li>Project management</li>
          <li>Creating a simple library in Python</li>
          <li>Data wrangling</li>
          <li>Algorithms to solve constraint problems</li>
          <li>Website design</li>
          <li>Using HTML and CSS</li>
        </ul>


      </div>
    </div>
  )

}

export default tinygridPage