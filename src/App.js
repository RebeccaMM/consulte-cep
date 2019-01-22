import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { consultarCEP } from './actions';

import { Button, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';

class App extends Component {
    state = {
        cep: ''
    }

    inputChange = event => {
        this.setState({
            cep: event.target.value
        })
    }

    render() {
        const { consultarCEP, lugar } = this.props;

        const { cep } = this.state;

        return (
            <div className="App">
                <div className="Consult">
                    <h4>Consultar</h4>
                    <div className="FormContainer">
                        CEP
                        <Input className="Input" type='text' onChange={this.inputChange} value={cep} />
                        <Button className="Button" color='blue' size="small" onClick={() => consultarCEP(cep)}>
                            Buscar
                        </Button>
                    </div>
                </div>
                <div>
                  {lugar && (<h2>{lugar.logradouro }</h2>)}
                </div>

                
            </div>
        );
    }
}

const mapStateToProps = store => ({
    lugar: store.clickState.lugar
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ consultarCEP }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
