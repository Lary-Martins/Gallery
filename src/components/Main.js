import React from 'react';
import Card from './Card';

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
          key={ key }
        />
      ))}
    </main>
  );
}
export default Main;
