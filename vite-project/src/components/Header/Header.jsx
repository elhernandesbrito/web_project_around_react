
import React from 'react';
import ImageVetor from '../../assets/images/Vector.png';

function Header() {
  return (
    <header className="header">
      <img
        src={ImageVetor}
        alt="vetor header"
        className="header__vector"
      />
      <div className="header__line"></div>
    </header>
  );
};

export default Header;

