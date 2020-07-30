import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './components/UI/Header'
import Navigation from './components/UI/Navigation'
// import CharacterGrid from './components/characters/CharacterGrid'
// import EpisodeGrid from './components/episodes/EpisodeGrid'
// import Search from './components/UI/Search'
import './App.css';

// const App = () => {
//   //States for fetch data and query data
//   const [items, setItems] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [query, setQuery] = useState('')

//   // Fetch Data and set Data and stop loading
//   useEffect( () => {
//     const fetchItems = async () => {
//       const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

//       setItems(result.data)
//       setIsLoading(false)
//     }

//     fetchItems()
//   }, [query])
//   // Add query to dependency to change values
const App = () => {

  return (
      <div className="App">
        <Header />
        <Navigation />
        {/* Create Props to set and get query data for search function */}
        {/* <Search getQuery={(q) => setQuery(q)} /> */}
        {/* <CharacterGrid isLoading={isLoading} items={items} /> */}
        {/* <EpisodeGrid isLoading={isLoading} items={items} /> */}
      </div>
  );
}


export default App;
