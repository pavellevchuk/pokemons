import React from 'react'
import Table from 'react-bootstrap/Table'

import {capitalize, hashId} from '../../helpers'

export default function PokemonStats({info}) {
    return (
        <div className="pokemon-card pokemon-stats">
            <div className="pokemon-card__image">
                <img src={info.data.sprites.front_default} alt="pokemon"/>
            </div>
            <div className="pokemon-card__info">
                <div className="pokemon-card__name">
                    {capitalize(info.data.name)} {hashId(info.data.id)}
                </div>
            </div>
            <Table bordered>
                <tbody>
                    <tr>
                        <td>Type</td>
                        <td>{capitalize(info.data.types[0].type.name)}</td>
                    </tr>
                    {info.data.stats.map((stat, index) => (
                        <tr key={index}>
                            <td>{capitalize(stat.stat.name)}</td>
                            <td>{stat.base_stat}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
