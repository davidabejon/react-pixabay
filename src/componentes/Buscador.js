import React, { Component } from 'react'

class Buscador extends Component {

    busquedaRef = React.createRef()

    obtenerDatos = (e) => {
        e.preventDefault()
        
        this.props.datosBusqueda(this.busquedaRef.current.value)
    }

    render() { 
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className='row flex align-items-center'>
                    <div className='form-group col-md-8'>
                        <input ref={this.busquedaRef} placeholder='Buscar...' type='text'className='form-control form-control-lg' />
                    </div>
                    <div className='form-group col-md-4'>
                        <input value='Buscar' type='submit'className='form-control form-control-lg btn btn-secondary col-md-4' />
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Buscador;