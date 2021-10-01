import React from 'react';
import { number, string } from 'prop-types';

import '../sass/Main.css';

function Card({ index, title }) {
  return (
    <div className="gallery-card" id={ `card-${index}` }>
      <h2 className="gallery-card-title">{ title }</h2>
      <a href="none" className="gallery-card-btn">MAIS FOTOS</a>
    </div>
  );
}

Card.propTypes = {
  title: string.isRequired,
  index: number.isRequired,
};

export default Card;
