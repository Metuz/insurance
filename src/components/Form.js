import React from 'react';

class Form extends React.Component{
  brandRef = React.createRef();
  yearRef = React.createRef();
  basicRef = React.createRef();
  completeRef = React.createRef();

  handleForm = (e) => {
    e.preventDefault();
    const plan = this.basicRef.current.checked ? 'basic' : 'complete';
    const dataForm = {
      brand: this.brandRef.current.value,
      year: this.yearRef.current.value,
      plan: plan
    }
    this.props.getInsurance(dataForm);
  }

  render() {
    return (
      <form className="cotizar-auto" onSubmit={this.handleForm}>
        <div className="campo">
          <label>Marca</label>
          <select name="marca" ref={this.brandRef}>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiatico</option>
          </select>
        </div>
        <div className="campo">
          <label>Año</label>
          <select name="year" ref={this.yearRef}>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
          </select>
        </div>
        <div className="campo">
          <label>Plan:</label>
          <input type="radio" ref={this.basicRef} name="plan" value="basico"/> Básico
          <input type="radio" ref={this.completeRef} name="plan" value="completo"/> Completo
        </div>
        <button type="submit" className="boton">Cotizar</button>
      </form>
    );
  }
}

export default Form;
