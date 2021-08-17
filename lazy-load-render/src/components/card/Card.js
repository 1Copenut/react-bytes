import React from 'react';

const Card = ({ title = 'Self-titled' }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
