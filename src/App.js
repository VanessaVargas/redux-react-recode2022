import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cliqueButton } from './Actions';

class App extends Component {
  state = {
    inputValue: " ",
  }

  inputChange = (event) => {
    this.setState ({
      inputValue: event.target.value,
    });
  };

  render(){
    const { cliqueButton, newValue } = this.props;
    const { inputValue } = this.state;

  return (
    <div className="App">
        <input type='text' onChange={this.inputChange} value={inputValue}/>
        <button onClick={ () => cliqueButton (inputValue)}>Clique aqui</button>
        <h2>{newValue}</h2>
    </div>
  );
}
}

const mapStateToProps = store => ({
  //utilizando o reducer (cliqueState) para inserir um novo valor para o estado
  newValue: store.cliqueState.newValue,
});


const mapDispatchToProps = dispatch => bindActionCreators ({ cliqueButton }, dispatch );

export default connect (mapStateToProps, mapDispatchToProps) (App);