'use client';

import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun, FiMonitor } from 'react-icons/fi';
import { useLocalStorage } from 'usehooks-ts';

const SwitchTheme = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme', 'system');
  const [resolvedTheme, setResolvedTheme] = useState('system');
  const [isOpen, setIsOpen] = useState(false);

  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  useEffect(() => {
    setResolvedTheme(theme === 'system' ? getSystemTheme() : theme);
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.body.setAttribute('data-theme', resolvedTheme);
    }
  }, [resolvedTheme, isMounted]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleThemeSelect = (selectedTheme: string) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  if (!isMounted) return null;

  const renderIcon = () => {
    switch (theme) {
      case 'dark':
        return <FiMoon className='w-5 h-5' />;
      case 'light':
        return <FiSun className='w-5 h-5' />;
      default:
        return <FiMonitor className='w-5 h-5' />;
    }
  };

  return (
    <div className='dropdown dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-ghost btn-circle'
        onClick={toggleDropdown}
      >
        {renderIcon()}
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
        >
          {['dark', 'light', 'system'].map((mode) => (
            <li key={mode}>
              <a onClick={() => handleThemeSelect(mode)}>
                {mode === 'dark' && <FiMoon className='w-5 h-5 mr-2' />}
                {mode === 'light' && <FiSun className='w-5 h-5 mr-2' />}
                {mode === 'system' && <FiMonitor className='w-5 h-5 mr-2' />}
                {`${mode.charAt(0).toUpperCase() + mode.slice(1)} Theme`}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchTheme;
