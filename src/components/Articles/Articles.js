import React, { Component } from "react";
import Article from '../Article/Article.js';
import Formulario from '../Formulario/Formulario';


class Articles extends Component {constructor(props) {
    super(props);
    this.state = {
        peliculas : [],
        isLoaded: false
    }
}
componentDidMount() {
    let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=c57f4aacd06596fc7da4af9f1a6e8489"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({peliculas: data.results, isLoaded: true})
    })
    .catch(e => console.log(e))
}

filtrarPeli (PeliaFiltrar) {
    //Utilizamos el buscador para filtrar los articles que busquemos con el formulario
    let peliculasBuscadas = this.state.peliculas.filter ( peliculas => peliculas.title.toLowerCase().includes(PeliaFiltrar.toLowerCase()))
    //El includes determina si el texto esta incluido = true, sino = false
    //El toLowerCase() pasa todo a minusculas y desp determina si esta incluido o no
    this.setState({
        peliculas : peliculasBuscadas
    })
    //Esta funcion va a ser ejecutada dentro del Formulario
}

render() {
  return (
      <React.Fragment>
<div>
    <Formulario filtrar= { (texto) => this.filtrarPeli (texto)}  />
</div>
      <div className='card-container'> 
            {
        this.state.isLoaded === false ?
        <p>Cargando...</p> :
        this.state.peliculas.map((pelicula, idx)  => <Article key= {pelicula.name + idx} dataPelicula= {pelicula} />
             ) }
      </div>
      </React.Fragment>
);
}
}
export default Articles;