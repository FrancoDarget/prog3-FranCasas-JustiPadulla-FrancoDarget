import React, { Component } from "react";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image : " ",
            titulo: " ",
            descrip: " ",
            popularidad: " ",
            fecha: " ",
            genero: " "
        }
    }

    apiCall(url, consecuencia) {
fetch(url)
.then(res => res.json())
.then(data => consecuencia(data))
.catch(err => console.log(err))
    }

    componentDidMount() {
this.apiCall("https://api.themoviedb.org/3/movie/upcoming?api_key=c57f4aacd06596fc7da4af9f1a6e8489", this.mostrarPelicula);
    }
    mostrarPelicula = (data) => {
        console.log(data.results)
        this.setState(
            {image: "https://image.tmdb.org/t/p/w342/" + data.results[0].poster_path},
            //{titulo:  data.results[0].title},
            //{descrip: data.results[0].overview},
            //{popularidad: data.results[0].popularity},
            //{fecha: data.results[0].release_date },
           // {genero: data.results[0].genre_ids},
            )
    
    }

    componentDidUpdate() {

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
            <img src={this.state.image} alt=""/>
            <h3>{this.state.titulo}</h3>
            <p className="description">{this.state.descrip}</p>
            <section className="aditional-info">
                <p><span className="infoAdicional">Popularidad: </span>{this.state.popularidad}</p>
                <p><span className="infoAdicional">Fecha de lanzamiento: </span>{this.state.fecha}</p>
                <p><span className="infoAdicional">Geenero: </span>{this.state.genero}</p>
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