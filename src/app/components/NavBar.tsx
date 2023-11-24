import React from 'react'
import Link from 'next/link'
import {FaGithub} from "react-icons/fa";
import {AiFillLinkedin} from 'react-icons/ai';
import ThemeSwitcher from './ThemeSwitcher'

const NavBar = () => {
  return (
    <div className='sticky '>
      <nav className='pt-10 pb-5 flex justify-between'>
        <Link href='/'><h1 className='text-2xl font-mono hover:text-teal-600'>Harris Perdis</h1></Link>
        <ul className='flex items-center'>
          <li className='pl-5'>
            <Link href='/about'>
              <p className='font-bold hover:text-teal-600'>about</p>
            </Link>
          </li>
          <li className='pl-5'>
            <Link href='/portfolio'>
              <p className='font-bold hover:text-teal-600'>portfolio</p>
            </Link>
          </li>
          <li className='pl-5'>
            <ThemeSwitcher/>
          </li>
          <li className='pl-5'>
            <Link className='text-2xl py-2' href='https://www.linkedin.com/in/harris-perdis-52786b255' target="_blank">
              <AiFillLinkedin/>
            </Link>
          </li>
          <li className='pl-5'>
            <Link className='text-2xl py-2' href='https://github.com/HarrisAsync' target="_blank">
              <FaGithub/>
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="h-px bg-gray-600 border-0"></hr>
    </div>
  )
}

export default NavBar