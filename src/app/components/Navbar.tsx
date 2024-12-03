'use client';

import SwitchTheme from './SwitchTheme';

const Navbar = () => {
  return (
    <div className='navbar bg-base-300'>
      <div className='navbar-start'></div>
      {/* <div className='navbar-center'>
        <a className='btn btn-ghost text-xl'>Rizky Fauzan Hanif - Network Engineer</a>{' '}
      </div> */}
      <div className='navbar-end'>
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Navbar;
