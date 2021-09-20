import React, { Component } from "react";
import Article from '../Article/Article.js';
import Formulario from '../Formulario/Formulario';


class Articles extends Component {constructor(props) {
    super(props);
    this.state = {
        peliculas : [],
        isLoaded: false,
        peliculasOg : [],
        nextUrl:2,
        // orden: "grid",
    }
}

componentDidMount() {
    let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=c57f4aacd06596fc7da4af9f1a6e8489"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({peliculas: data.results, isLoaded: true, peliculasOg: data.results})
    })
    .catch(e => console.log(e))
}
addMore(){
    //busco en la api
    let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=c57f4aacd06596fc7da4af9f1a6e8489&page=" + this.state.nextUrl
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({
          
            peliculas: this.state.peliculas.concat(data.results),
            nextUrl:this.state.nextUrl+1,
        })
    })
    .catch(e => console.log(e))
    //los sumo al array inicial
    
    }

    deleteCard(peliaBorrar){
        let pelisQueQuedan = this.state.peliculas.filter(pelicula=>pelicula.id!==peliaBorrar)
        this.setState({
            peliculas:pelisQueQuedan
        })
    }

filtrarPeli (PeliaFiltrar) {
    //Utilizamos el buscador para filtrar los articles que busquemos con el formulario
    let peliculasBuscadas = this.state.peliculasOg.filter ( pelicula => pelicula.title.toLowerCase().includes(PeliaFiltrar.toLowerCase()))
    //El includes determina si el texto esta incluido = true, sino = false
    //El toLowerCase() pasa todo a minusculas y desp determina si esta incluido o no
    this.setState({
        peliculas : peliculasBuscadas
    })
    //Esta funcion va a ser ejecutada dentro del Formulario
}


// grid(){
//     this.setState({
//         orden: "grid",
//     })
// }

// row(){
//     this.setState({
//         orden: "row",
//     })
// }


render() {
  return (
      <React.Fragment>
<div className="filtrados">
    <Formulario filtrar= { (texto) => this.filtrarPeli (texto)}  />
    <section>
        <p>Ordenar ASC / DESC</p>
        {/* <div className= {`${this.state.orden=="grid:" ? "formatoGrid": "formatoRow"}`}> */}
            <i className="fas fa-th" onClick = {()=>this.grid()}></i>
            <i className="fas fa-align-justify" onClick = {()=>this.row()}></i>
        {/* </div> */}
    </section>
</div>
      <div className='card-container'> 
            {
        this.state.isLoaded === false ?
        <img src='/assets/img/loader.gif'></img> :
        this.state.peliculas.map((pelicula, idx)  => <Article key= {pelicula.name + idx} dataPelicula= {pelicula} 
          remove={(peliaBorrar)=>this.deleteCard(peliaBorrar)} /> )}
             <button className="cargarMasPeliculas" onClick={()=>this.addMore()}> Cargar Más Peliculas </button>
      </div>
      {/* <Articles orientacion = {this.state.orden}/> */}
      </React.Fragment>
);
}
}
export default Articles;