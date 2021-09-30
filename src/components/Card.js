import React from 'react';
import { number, string } from 'prop-types';

function Card({ key, title }) {
  return (
    <div className="gallery-card" id={ `card-${key}` }>
      <h2 className="gallery-card-title">{ title }</h2>
      <a href="none" className="gallery-card-btn">Mais fotos</a>
    </div>
  );
}

Card.propTypes = {
  title: string.isRequired,
  key: number.isRequired,
};

export default Card;
