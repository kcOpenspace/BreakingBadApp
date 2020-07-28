import React from 'react'
import CharacterItem from './CharacterItem'

const characterGrid = ({ items, isLoading }) => {
    //If isLoading true then default else get Card Data
    return  isLoading ? (
        <h1>Loading...</h1>
        ) : (
        <section className="cards">
        {items.map(item => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
        </section>
    )
}

export default characterGrid
