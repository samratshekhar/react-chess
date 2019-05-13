import React, { Component } from 'react';
import './index.css';
import Tile from '../Tile';

export default class Row extends Component {
    renderTiles() {
        const tiles = [];
        for (let i = 0; i < 7; i++) {
            tiles.push(<Tile />);
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