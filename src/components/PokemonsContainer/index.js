import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'

import {getChunk , getPokemon, addExtendedData, resetFilter} from '../../actions/pokemons'
import {setVisibleInfo} from '../../actions/pokemons'
import MiniCard from '../MiniCard'
import PokemonStats from '../PokemonStats'

function PokemonsContainer({
    pokemons,
    extendedData,
    addExtendedData,
    filteredData,
    next,
    infoData,
    getPokemon,
    getChunk,
    setVisibleInfo,
    resetFilter
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getChunk();
    }, [getChunk])

    useEffect(() => {
        if(pokemons.length){

            let pokemonsPromises = pokemons.map((pokemon) => {
                    return getPokemon(pokemon.url);
            });

            Promise.all(pokemonsPromises)
            .then(values => {
                setLoading(false);
                addExtendedData(values)
            })

        }
    }, [pokemons, getPokemon, addExtendedData])

    const handleLoadMore = () => {
        getChunk(next);
    }

    const handleCloseInfo = () => {
        setVisibleInfo(false);
    }

    const handleResetFilter = () => {
        resetFilter();
    }

    return (<>
        <div className="reset-filters" onClick={handleResetFilter}>Reset filters</div>
        <div className="main-container">
            <div className="main-container__pokemons">
                    {loading
                    ? null
                    : filteredData.length
                    ?
                    filteredData.map((pokemon, index) => <div className="main-container__pokemons-item" key={index}><MiniCard data={pokemon}/></div>)
                    :
                    extendedData.map((pokemon, index) => <div className="main-container__pokemons-item" key={index}><MiniCard data={pokemon}/></div>)
                    }
                <div className="main-container__load-more" onClick={handleLoadMore}>Load more</div>
            </div>
            {
                infoData.visible
                ? (<div className="main-container__pokemon-info-container">
                        <div className="main-container__pokemon-info-times" onClick={handleCloseInfo}></div>
                        <div className={`main-container__pokemon-info ${window.pageYOffset >= 100 ? 'offset-top' : ''}`}>
                            <PokemonStats info={infoData}/>
                        </div>
                    </div>)
                : null
            }
        </div>
        </>
    )
}

window.onscroll = () => {
    let info = document.querySelector('.main-container__pokemon-info');
    if(!info) return;
    if(window.pageYOffset >= 100){
        info.classList.add('offset-top');
    }else{
        info.classList.remove('offset-top');
    }
}

const mapStateToProps = ({ pokemonsReducer, pokemonInfoReducer }) => {
    return {
        pokemons: pokemonsReducer.data,
        next: pokemonsReducer.next,
        infoData: pokemonInfoReducer,
        extendedData: pokemonsReducer.extendedData,
        filteredData: pokemonsReducer.filteredData
    }
}

export default connect(mapStateToProps, {
    getChunk,
    setVisibleInfo,
    getPokemon,
    addExtendedData,
    resetFilter
})(PokemonsContainer)
