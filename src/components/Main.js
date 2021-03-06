import React from 'react';
import Card from './Card';

import '../sass/Main.css';

function Main() {
  const titles = [
    'Animais',
    'Arquitetura',
    'Cidade',
    'Decoração',
    'Esportes',
    'Natureza',
    'Paisagem',
    'Pessoas',
    'Refeições',
  ];

  return (
    <main className="gallery">
      { titles.map((title, key) => (
        <Card
          title={ title }
          index={ key }
          key={ title }
        />
      ))}
    </main>
  );
}
export default Main;
