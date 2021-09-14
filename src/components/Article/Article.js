import React, { Component } from "react";


class Article extends Component {
    constructor(props) {
        super(props);
    }


  render() {
      return (
    <article>
        <section className="navigation">
            <div>
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
            </div>
            <i className="far fa-window-close"></i>
        </section>
        <main>
            <img src= {`https://image.tmdb.org/t/p/w342/${this.props.dataPelicula.poster_path}`} alt=""/>
            <h3>{this.props.dataPelicula.title}</h3>
            <p className="description">{this.props.dataPelicula.overview}</p>
            <section className="aditional-info">
                <p><span className="infoAdicional">Popularidad: </span>{this.props.dataPelicula.popularity}</p>
                <p><span className="infoAdicional">Fecha de lanzamiento: </span>{this.props.dataPelicula.release_date}</p>
                <p><span className="infoAdicional">Lenguaje: </span>{this.props.dataPelicula.original_language}</p>
            </section>
            <div className='botonInfoAdicional'>
            <a href="">Ver más</a>
            </div>
        </main>
    </article>
);
}
}

export default Article;