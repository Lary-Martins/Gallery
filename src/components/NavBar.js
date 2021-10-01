import React from 'react';

import '../sass/Header.css';

function NavBar() {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <a href="none" className="active">HOME</a>
        </li>
        <li>
          <a href="none">FOTOS</a>
        </li>
        <li>
          <a href="none">SERCIÇOS</a>
        </li>
        <li>
          <a href="none">SOBRE</a>
        </li>
        <li>
          <a href="none">CONTATOS</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
