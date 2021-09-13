import React from 'react';
import Formulario from '../Formulario/Formulario';

function Header() {
  return (

<header>
<h1 className="titulo">Playit</h1>
<section>
    <p>Ordenar ASC/ DESC</p>
    <i class="fas fa-th"></i>
    <i class="fas fa-align-justify"></i>
    <Formulario/>
</section>
</header>
);
}

export default Header;