'use client';
import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState } from "react";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BsFillMoonStarsFill
      onClick={() => setDarkMode(!darkMode)}
      className=" cursor-pointer text-2xl dark:text-gray-200"
    />
  )
}

export default DarkModeBtn