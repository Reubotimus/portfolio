'use client';
import { useTheme } from 'next-themes';
import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) {
    return null
  }

  return (
    <BsFillMoonStarsFill
      onClick={() => setTheme(stringThemeSwitcher(theme))}
      className="cursor-pointer"
    />
  );

  function stringThemeSwitcher(currentTheme) {
    if (currentTheme == 'dark') {
      return 'light'
    } else if (currentTheme == 'light') {
      return 'dark'
    }
  }
};



export default ThemeSwitcher;