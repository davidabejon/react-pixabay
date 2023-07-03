import React, { Component } from 'react'

class Paginacion extends Component {
    render() { 
        return (
            <div className='d-flex gap-3 justify-content-center mb-5'>
                <button onClick={this.props.paginaAnterior} className='btn btn-success'>← Anterior</button>
                <button onClick={this.props.paginaSiguiente} className='btn btn-success'>Siguiente →</button>
            </div>
        );
    }
}
 
export default Paginacion;