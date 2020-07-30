import React from 'react'

const EpisodeItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <h1>{item.title}</h1>
                    <ul>
                        <li>
                            <strong>Season:</strong> {item.season}
                        </li>
                        <li>
                            <strong>Episode:</strong> {item.episode}
                        </li>
                        <li>
                            <strong>Air Date:</strong> {item.air_date}
                        </li>
                        <li>
                            <strong>Characters:</strong> {item.characters}
                        </li>
                        <li>
                            <strong>Series:</strong> {item.series}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EpisodeItem
