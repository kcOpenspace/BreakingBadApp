import React from 'react'
import EpisodeItem from './EpisodeItem'

const EpisodeGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <h1>Loading...</h1>
        ) : (
        <section className="cards">
        {items.map(item => (
            <EpisodeItem key={item.episode_id} item={item}></EpisodeItem>
        ))}
        </section>
    )
}

export default EpisodeGrid
