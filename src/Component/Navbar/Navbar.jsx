import React from 'react'
import "./nav.css"
import Logo from './Logo';
import Menu from './Menu';

const Navbar = () => {
  return (
    <>
      <section className="main">
        <div id="nav">
          <Logo />
          <Menu />
        </div>
      </section>
    </>
  );
}

export default Navbar