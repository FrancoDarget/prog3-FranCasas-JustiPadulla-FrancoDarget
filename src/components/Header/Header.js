import React from 'react';

function Header() {
  return (

<header>
<h1 className="titulo">Playit</h1>
<section>
    <p>Ordenar ASC/ DESC</p>
    <i class="fas fa-th"></i>
    <i class="fas fa-align-justify"></i>
    <form action="">
        <input type="text" name="search" id="" placeholder="Search"/>
        <button type="submit"><i class="fas fa-search"></i></button>
    </form>
</section>
</header>
);
}

export default Header;