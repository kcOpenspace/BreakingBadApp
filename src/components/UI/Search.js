import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search center'>
            <form>
                <input 
                    type='text'
                    className='form-control'
                    placeholder='Search Page...'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
