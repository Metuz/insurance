import React from 'react';

class Total extends React.Component {
  render(){
    const message = (!this.props.total) ? 'Elije marca, año y tipo' : 'El total es: $ ';
    return(
      <div className="gran-total">
        <span>{message}{this.props.total}</span>
      </div>
    )
  }
}

export default Total;
