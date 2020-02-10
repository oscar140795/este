import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import ConditionalSection from './sections/conditionals'
import cars from './data/cars.json'
import Form from './sections/conditionals'


class CarItem extends Component{
  render(){
    const {car} = this.props
    /** */
    return( 
      <li>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
        <li>
          <p><strong>Nombre: </strong>{car.name}</p>
      </li>
      </li>
      
    )
}}

class CarItem2 extends Component{
  render(){
    const {car} = this.props
    /** */
    return( 
      <li>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
}}


class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInicial }

    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)

    this.reiniciar = this.reiniciar.bind(this);
  }

  reiniciar() {
    
    this.setState({ contador: 1 })
  }

  render() {
    return <div>
      <div><ContadorNumero numero= {this.state.contador}></ContadorNumero></div>
      <button onClick={this.reiniciar}> Reiniciar</button>
    </div>
  }
}

class ContadorNumero extends Component{
  render(){
    return(
      <span> {this.props.numero}</span>
    )
  }
}

Contador.defaultProps = {
  contadorInicial: 9
}

function App() {
  const numbers = [1, 1, 3, 4, 5]
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>*/}
      {/*<ConditionalSection mostarA={false}/>

      {/*{numbers.map((number, index) => {
        return <p key={index}>Soy el numero {number}</p>
      })}

      {/*<ul>
        {
          cars.map(car => {
            return <CarItem key={car.id} car = {car}/>
          })
        }
      </ul>*/}

      <Form/>

    </div>
  );
}

export default App;