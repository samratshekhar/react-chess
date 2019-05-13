import React, { Component } from 'react';
import './index.css';

export default class Tile extends Component {
    render() {
        const { isBlack } = this.props;
        let backgroundColor;
        if (isBlack) {
            backgroundColor = '#7b5d33';
        } else {
            backgroundColor = '#f4ece4';
        }
        return (
            < div className="Tile" style={{ backgroundColor }}></div >
        );
    }
}
