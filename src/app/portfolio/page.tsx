import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import Tags from '../components/TagsClass'

const PortfolioPage = () => {
  let t1 = new Tags('Bootstrap')
  let t2 = new Tags('Javascript')
  let t3 = new Tags('P5js')
  let t4 = new Tags('Python')
  let t5 = new Tags('OpenCV')
  let t6 = new Tags('Swift')
  let t7 = new Tags('SwiftUI')
  let t8 = new Tags('Google Firebase')
  let t9 = new Tags('Google OR-tools')
  let t10 = new Tags('Vega-Lite')
  let t11 = new Tags('Git')
  let t12 = new Tags('UI Design')
  let t13 = new Tags('HTML')
  let t14 = new Tags('CSS')
  let t15 = new Tags('Forecasting')
  let t16 = new Tags('Optimisation')
  return (
    <div className='flex content-center justify-center py-10'>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20'>
        <PortfolioCard title={'MatchIOS'} description={'This partially completed project aimed at releasing an IOS app that can connect people to play sports, coordinate team play and share a sports resume. This app had functional account login, signup and forgot processes.'} linkPath={'portfolio/matchios'} imagePath={'/matchIOS.png'} imageAlt={'Photo of app pages'} tags={[t6, t7, t8, t12, t11]}/>
        <PortfolioCard title={'Drowzalert'} description={'As part of a small group, I competed in a 48hr hackathon hosted by UNIHACK. We developed a python app to detect closed eyelids as an early sign of drowsiness and fatigue in drivers, using OpenCV and pre-trained models.'} linkPath={'portfolio/drowzalert'} imagePath={'/drowzalert.jpeg'} imageAlt={'Photo of eyelids outlined'} tags={[t4, t5, t11]}/>
        <PortfolioCard title={'Tinygrid'} description={'The goal of this project was to develop an optimal battery and lecture schedule based on the predictions of future energy demand and production. I primarily worked on the optimisation and web part of the project, which used linear programming techniques and javascript.'} linkPath={'portfolio/tinygrid'} imagePath={'/tinygrid5.png'} imageAlt={'Photo of tinygrid dashboard'} tags={[t1, t2, t13, t14, t4, t9, t10, t15, t16, t11]}/>
        <PortfolioCard title={'Hypercube Project'} description={'This project aimed at digitising complex topics from a university mathematics class. It allowed users to explore concepts using interactive animations. I communicated with our client Prof. Burkard Polster also known as Mathologer on YouTube. He currently uses the interactive visualisations for lecturing purposes.'} linkPath={'portfolio/hypercubeproject'} imagePath={'/hypercube.png'} imageAlt={'Hypercube website home'} tags={[t1, t2, t13, t14, t3, t11]}/>
      </div>
    </div>

  )
}

export default PortfolioPage