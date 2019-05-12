import React from 'react';
import { primeraMayuscula } from '../helper';

class Summary extends React.Component {
  showSummary = () => {
    const { brand, year, plan } = this.props.data;
    if(!brand || !year || !plan) return null;
    return(
      <div className="resumen">
        <h2>Cotizacion</h2>
        <li>Marca: {primeraMayuscula(brand)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año: {year}</li>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.showSummary()}
      </div>
    )
  }
}

export default Summary;
