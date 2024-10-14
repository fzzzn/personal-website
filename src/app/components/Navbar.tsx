'use client';

import SwitchTheme from './SwitchTheme';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 sticky top-0 z-50 '>
      <div className='navbar-start'></div>
      <div className='navbar-center'>
        <a className='btn btn-ghost text-xl'>Fzzzn.</a>{' '}
      </div>
      <div className='navbar-end'>
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Navbar;
