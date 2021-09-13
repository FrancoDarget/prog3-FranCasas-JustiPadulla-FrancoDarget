import React, { Component } from "react";
import Article from '../Article/Article.js';

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

render() {
  return (
      <div className='card-container'> 
            {
        this.state.isLoaded === false ?
        <p>Cargando...</p> :
        this.state.peliculas.map((pelicula, idx)  => <Article key= {pelicula.name + idx} dataPelicula= {pelicula} />
             ) }
      </div>
  
);
}
}
export default Articles;