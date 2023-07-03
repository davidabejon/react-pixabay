import React, { Component } from 'react'
import Imagen from './Imagen'
import Paginacion from './Paginacion';

class Resultado extends Component {

    mostrarPaginacion = () => {
        const imagenes = this.props.imagenes;

        if (imagenes.length === 0) return null;
        else return (
            <Paginacion 
                paginaSiguiente={this.props.paginaSiguiente}
                paginaAnterior={this.props.paginaAnterior}
            />
        );
    }

    mostrarImagenes = () => {

        const imagenes = this.props.imagenes;

        if (imagenes.length === 0) return null;

        console.log(this.props.imagenes);

        return (
            <div className='col-12 p-5 row'>
                {imagenes.map((imagen) => {
                    return (
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}
                        />
                    );
                })}
            </div>
        );
    }
    
    render() { 
        return (
            <div className='mt-5'>
                {this.mostrarImagenes()}
                {this.mostrarPaginacion()}
            </div>
        );
    }
}
 
export default Resultado;