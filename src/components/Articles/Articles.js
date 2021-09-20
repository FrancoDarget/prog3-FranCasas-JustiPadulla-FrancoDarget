import React, { Component } from "react";
import Article from '../Article/Article.js';
import Formulario from '../Formulario/Formulario';


class Articles extends Component {constructor(props) {
    super(props);
    this.state = {
        peliculas : [],
        //Aca donde voy a guardar los datos que obtenga de la API
        isLoaded: false,
        peliculasOg : [],
        //Aca donde voy a guardar los datos que obtenga de la API pero va a ser utilizado para el filtrado dentro del buscador
        nextUrl:2,
        orden: "grid",
    }
}

//Todo componente con estado tiene 3 metodos correspondientes a su ciclo de vida.
//Primero el montaje = constructor, luego se renderiza y se actualiza el DOM y referencial
//Inmediantamente aparece el componentDidMount(), siempre despues del primer renderizado. Aca hacemos los llamados asincronico de APIs, cambia el contenido y obliga que el componente se vuelva a renderizar.
//Al actualizar el componente se utiliza componentDidUpdate(), espera que se actualiza el componente. Cuando sufre un cambio de estado, la primera linea no se ejecuta en el renderizado. Este metodo puede recibir dos parametros (prevProps) y (prevState), se utiliza para funciones de busqueda.
//componentWillUnmount() se invoca antes de desmontar y destruir un componente. Tambien, se utiliza para detener contadores.
//El ComponentDidMount llamos a la API, lo primero que se ejecuta despues del renderizado
componentDidMount() {
    let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=c57f4aacd06596fc7da4af9f1a6e8489"
    fetch(url)
    //Es lo mismo que antes, fetch recibe la respuesta de la url y el primer .then recibe la respuesta de lo que viene de fetch y la pase a json
    .then(response => response.json())
    //El siguiente .then agarra los datos de la Api
    .then(data => {
        console.log(data)
        //Esty poniendo en el objeto peliculas todo lo que trae la API
        this.setState({peliculas: data.results, isLoaded: true, peliculasOg: data.results})
    })
    //El catch muestra los errores
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


grid(){
    this.setState({
        orden: "grid",
    })
}

row(){
    this.setState({
        orden: "row",
    })
}


render() {
  return (
      <React.Fragment>
<div className="filtrados">
    <Formulario filtrar= { (texto) => this.filtrarPeli (texto)}  />
    <section>
        <p>Ordenar ASC / DESC</p>
        <div className= "">
            <i className="fas fa-th" onClick = {()=>this.grid()}></i>
            <i className="fas fa-align-justify" onClick = {()=>this.row()}></i>
        </div>
    </section>
</div>
      <div className='card-container'> 
            
      {/* Al renderizar puede tardar un poco, entonces utilizo un if ternario. Si lo que hay dentro de Articles esta vacio (no hay peliculas porque la API no cargo)
 imprimime un gif que es un Loader, sino imprimime las peliculas con sus correspondientes Datos 
 Retornamos el loader o el bloque con las peliculas */}
 {
      this.state.isLoaded === false ?
        <div className="lds-dual-ring"></div> :
        this.state.peliculas.map((pelicula, idx) => <Article key= {pelicula.name + idx} dataPelicula= {pelicula} 
          deleteCard={(peliaBorrar)=>this.deleteCard(peliaBorrar)} 
          formato = {this.state.orden}
          /> )
 }
           {/* Si ya cargo la API, voy a mostrar la informacion,
        utilizo un map que recibe el array peliculas y genera un bucle que imprime todas las peliculas que encuentre dentro del objeto peliculas
        Selecciono una pelicula y le paso toda la informacion de determinada pelicula, el dataPelicula le pasa toda la informacion y ya tiene en el props de Article toda la data
        donde podemos utilizar dataPelicula.popularity para saber la popularidad de la pelicula por ejemplo.
    */}
             <button className="cargarMasPeliculas" onClick={()=>this.addMore()}> Cargar Más Peliculas </button>
      </div>
      {/* <Articles orientacion = {this.state.orden}/> */}
      </React.Fragment>
);
}
}
export default Articles;