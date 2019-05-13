import React, { Component } from 'react';
import './index.css';
import Tile from '../Tile';

export default class Row extends Component {
    renderTiles() {
        const { index } = this.props;
        const tiles = [];
        for (let i = 0; i < 7; i++) {
            tiles.push(<Tile isBlack={(i + index) % 2 !== 0} />);
        }
        return tiles;
    }
    render() {
        return (
            <div className="Row">
                {this.renderTiles()}
            </div>
        )
    }
}