import React, { Component } from "react";


class Article extends Component {
    constructor(props) {
        super(props);
        this.state={
        text:'ver mas',
        viewMore:false,
    }
    }

    viewMore(){
        if(this.state.viewMore === true){
         this.setState({
            text:'ver mas',
            viewMore: false,
         })
        } else{
            this.setState({
            text:'ver menos',
            viewMore: true,
        })}
    }

  render() {
      return (
    <article className={`${this.props.formato=="grid" ? "formatoGrid": "formatoRow"}`} >
    {/* <article className={`${this.props.orientacion=="grid:" ? "formatoGrid": "formatoRow"}`} ></article> */}
        <section className="navigation" onClick={()=>this.props.deleteCard(this.props.dataPelicula.id)}>
            <img src='/assets/img/eliminar.png.png'/>
        </section>
        <main>
            {/*Utilizo toda la informacion proporcionada de la API al utilizar this.props.dataPelicula */}
            <img src= {`https://image.tmdb.org/t/p/w342/${this.props.dataPelicula.poster_path}`} alt=""/>
            <h3>{this.props.dataPelicula.title}</h3>
            <section className="aditional-info">
                <p className={`extra ${this.state.viewMore?'show':'hide'}`}>{this.props.dataPelicula.overview}</p>
                <br/>
                <p className={`extra ${this.state.viewMore?'show':'hide'}`}><span className={`extra ${this.state.viewMore?'show':'hide'}`}>Popularidad: </span>{this.props.dataPelicula.popularity}</p>
                <p className={`extra ${this.state.viewMore?'show':'hide'}`}><span className={`extra ${this.state.viewMore?'show':'hide'}`}>Fecha de lanzamiento: </span>{this.props.dataPelicula.release_date}</p>
                <p className={`extra ${this.state.viewMore?'show':'hide'}`}><span className={`extra ${this.state.viewMore?'show':'hide'}`}>Lenguaje: </span>{this.props.dataPelicula.original_language}</p>
                <div className="botonVerMas"><p className="infoAdicional" onClick={()=>this.viewMore()}>{this.state.text}</p></div>
            </section>
        </main>
    </article>
);
}
}

export default Article;