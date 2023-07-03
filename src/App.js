import { Component } from 'react';
import './App.css';
import Buscador from './componentes/Buscador.js'
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  };

  paginaAnterior = () => {
    let paginaActual = this.state.pagina;
    if (paginaActual === 1) return null;
    paginaActual--;
    this.setState({
      pagina: paginaActual
    }, () => {
      this.consultarApi();
      window.scroll(0, 0);
    });
  }
  
  paginaSiguiente = () => {
    let paginaActual = this.state.pagina;
    paginaActual++;
    this.setState({
      pagina: paginaActual
    }, () => {
      this.consultarApi();
      window.scroll(0, 0);
    });
  }

  consultarApi = () => {
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=38038170-17a463b7f778987a2db1adaba&q=${this.state.termino}&per_page=32&page=${pagina}`;
    // console.log(url)
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({
        imagenes: resultado.hits
      }));
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, this.consultarApi);
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <p className='lead text-center buscador-texto'>Buscador de imágenes</p>
          <Buscador 
            datosBusqueda = {this.datosBusqueda}
          />
        </div>
        <Resultado
          imagenes = {this.state.imagenes}
          paginaAnterior = {this.paginaAnterior}
          paginaSiguiente = {this.paginaSiguiente}
        />
      </div>
    )
  }
}

export default App;
