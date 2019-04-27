import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

export default class Pokedex extends Component {
    
    render() {

        return (
        <div className="Pokedex">
            <h4>Total Experience: {this.props.exp}</h4>
            <h4>{this.props.isWinner ? 'WINNER!' : 'LOSER!'}</h4>
            <div className="Pokedex-cards">
                {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        </div>
        );
    }
}