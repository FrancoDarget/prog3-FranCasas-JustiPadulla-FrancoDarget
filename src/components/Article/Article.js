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
            text:'ver menos',
            viewMore: false,
         })
        } else{
            this.setState({
            text:'ver mas',
            viewMore: true,
        })}
    }

  render() {
      return (
    <article>
        <section className="navigation" onClick={()=>this.props.remove(this.props.dataPelicula.id)}>
            <img src='/assets/img/eliminar.png.png'/>
        </section>
        <main>
            <img src= {`https://image.tmdb.org/t/p/w342/${this.props.dataPelicula.poster_path}`} alt=""/>
            <div className='botonInfoAdicional'onClick={()=>this.viewMore()}>
            <a href=""><img src='/assets/img/info.png.png'/></a>
            </div>
            <h3>{this.props.dataPelicula.title}</h3>
            <section className="aditional-info">
                <p className="description">{this.props.dataPelicula.overview}</p>
                <br/>
                <p className={`extra ${this.state.viewMore?'show':'hide'}`}><span className={`extra ${this.state.viewMore?'show':'hide'}`}>Popularidad: </span>{this.props.dataPelicula.popularity}</p>
                <p className={`extra ${this.state.viewMore?'show':'hide'}`}><span className={`extra ${this.state.viewMore?'show':'hide'}`}>Fecha de lanzamiento: </span>{this.props.dataPelicula.release_date}</p>
                <p className={`extra ${this.state.viewMore?'show':'hide'}`}><span className={`extra ${this.state.viewMore?'show':'hide'}`}>Lenguaje: </span>{this.props.dataPelicula.original_language}</p>
                
            </section>
        </main>
    </article>
);
}
}

export default Article;