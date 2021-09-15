import React from 'react';
import Formulario from '../Formulario/Formulario';

function Header() {
  return (

<header>
<h1 className="titulo">Playit</h1>
<section>
    <p>Ordenar ASC/ DESC</p>
    <i className="fas fa-th"></i>
    <i className="fas fa-align-justify"></i>
    <Formulario/>
</section>
</header>
);
}

export default Header;