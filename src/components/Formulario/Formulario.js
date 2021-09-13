import React, { Component } from "react";


class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterBy: ""
        }
    }

evitarEnviar(evento) {
    evento.preventDefault();
    console.log("Esta funcionando esta shit?")
}

controlarCambios(event){
    this.setState ({
        filterBy: event.target.value,
    })
    this.props.filtrar(this.state.filterBy)
}
  render() {
      return (
    
<form action="" onSubmit={(eventoEnviar) => this.evitarEnviar(eventoEnviar)}>
        <input type="text" onChange={(eventoValor)=> this.controlarCambios(eventoValor) } value={this.state.filterBy} name="search" id="" placeholder="Search"/>
        <button type="submit"><i class="fas fa-search"></i></button>
    </form>
);
}
}

export default Formulario;