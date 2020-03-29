import React from 'react'

import { setPokemonInfo, filterPokemons, addExtendedData } from '../../actions/pokemons'
import {capitalize, abilityColor} from '../../helpers'
import { connect } from 'react-redux';

function MiniCard({data, setPokemonInfo, filterPokemons}) {
    const handleOnClick = (e) => {
        e.preventDefault()
        setPokemonInfo(data);
    }

    const handleFilterPokemons = (e) => {
        e.preventDefault();
        e.stopPropagation();
        filterPokemons(e.currentTarget.dataset.type);
    }

    return (
        <div className="pokemon-card" onClick={handleOnClick}>
            <div className="pokemon-card__image">
                <img src={data.sprites.front_default} alt="pokemon"/>
            </div>
            <div className="pokemon-card__info">
                <div className="pokemon-card__name">
                    {
                        capitalize(data.name)
                    }
                </div>
            </div>
            <div className="pokemon-card__abilities">
                {data.types.map((type, index) => (
                    <div className={`pokemon-card__ability ${type.type.name}`} key={index} onClick={handleFilterPokemons} data-type={type.type.name}>
                        {capitalize(type.type.name)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default connect(null,  { setPokemonInfo, filterPokemons, addExtendedData })(MiniCard)
