import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../UI/Search'
import CharacterGrid from './CharacterGrid'

const CharacterPage = () => {
    //States for fetch data and query data
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
  
    // Fetch Data and set Data and stop loading
    useEffect( () => {
      const fetchItems = async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
  
        setItems(result.data)
        setIsLoading(false)
      }
  
      fetchItems()
    }, [query])
    // Add query to dependency to change values

    
    return (
      <div>
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    )
}

export default CharacterPage
