import React, { Component } from 'react';
import Row from './components/Row'

export default class Board extends Component {
    renderRows() {
        const tiles = [];
        for (let i = 0; i < 7; i++) {
            tiles.push(<Row />);
        }
        return tiles;
    }

    render() {
        return (
            <div>
                {this.renderRows()}
            </div>
        )
    }
}