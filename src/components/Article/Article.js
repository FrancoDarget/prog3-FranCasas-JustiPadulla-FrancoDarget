import React, { Component } from "react";


class Article extends Component {
    constructor(props) {
        super(props);
    }


  render() {
      return (
    <article>
        <section className="navigation">
            <img src='https://cdn-icons-png.flaticon.com/512/463/463612.png'/>
        </section>
        <main>
            <img src= {`https://image.tmdb.org/t/p/w342/${this.props.dataPelicula.poster_path}`} alt=""/>
            <div className='botonInfoAdicional'>
            <a href=""><img src='https://cdn-icons-png.flaticon.com/512/148/148764.png'/></a>
            </div>
            <h3>{this.props.dataPelicula.title}</h3>
            <section className="aditional-info">
                <p className="description">{this.props.dataPelicula.overview}</p>
                <p><span className="infoAdicional">Popularidad: </span>{this.props.dataPelicula.popularity}</p>
                <p><span className="infoAdicional">Fecha de lanzamiento: </span>{this.props.dataPelicula.release_date}</p>
                <p><span className="infoAdicional">Lenguaje: </span>{this.props.dataPelicula.original_language}</p>
            </section>
        </main>
    </article>
);
}
}

export default Article;