import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';

import '../App.css';

export default class Result extends Component {
    render() {
        const { lugar } = this.props;

        return (
            lugar && (
                <div className="ResultContainer">
                    <div>
                        <h2>{lugar.logradouro}</h2>
                        {lugar.bairro && (lugar.bairro)}
                        <br />
                        {lugar.localidade && (`${lugar.localidade} - ${lugar.uf}`)}
                        <br />
                        {lugar.cep && (lugar.cep)}
                    </div>
                    <div className="CloseResult">
                        <Icon name='close' />
                    </div>
                </div>
            )
        );
    }
}