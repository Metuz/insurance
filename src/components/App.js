import React from 'react';
import Header from "./Header";
import Form from './Form';
import Summary from './Summary';
import Total from './Total';
import { getYear, getBrand, getPlan } from '../helper';

class App extends React.Component {
  state = {
    total: '',
    auto: {}
  }

  getInsurance = (data) => {
    let total = 2000;
    total -= ((getYear(data.year) * 3) * total) / 100;
    total *= getBrand(data.brand);
    total *= getPlan(data.plan);
    this.setState({
      total: parseFloat(total).toFixed(2),
      auto: data
    })
  }

  render() {
    return (
      <div className="contenedor">
        <Header title='Cotizador de Seguro de Autos'/>
        <div className="contenedor-formulario">
          <Form getInsurance={this.getInsurance}/>
          <Summary data={this.state.auto} />
          <Total total={this.state.total} />
        </div>
      </div>
    );
  }
}

export default App;
