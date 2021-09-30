import React from 'react';

function NavBar() {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <a href="none" className="active">Home</a>
        </li>
        <li>
          <a href="none">Fotos</a>
        </li>
        <li>
          <a href="none">Serviços</a>
        </li>
        <li>
          <a href="none">Sobre</a>
        </li>
        <li>
          <a href="none">Contatos</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
