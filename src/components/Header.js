import React from 'react';
import NavBar from './NavBar';
import SocialMedia from './SocialMedia';

function Header() {
  return (
    <header className="header">
      <a href="none" className="header-brand">Gallery</a>
      <NavBar />
      <SocialMedia />
    </header>
  );
}
export default Header;
