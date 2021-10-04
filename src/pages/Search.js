import React, { useState, useEffect } from 'react'
import useFetch from 'react-fetch-hook'

const Search = () => {
    const url = 'http://hn.algolia.com/api/v1/search_by_date?query='
    const [search, setSearch] = useState(null)
    const [query, setQuery] = useState('null')
    const { isLoading, data, error } = useFetch(url + search + '&tags=story') 
    let stories = []

    if (isLoading) {
      return "loading..."
    }

    const handleChange = (event) => {
        event.preventDefault()
        let userInput = event.target.value
        userInput.toLowerCase()
        console.log(userInput)
        setQuery(userInput)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setSearch(query)
    }
   
    
    if (search) {

        stories = data.hits
    }

    return (
        <div>
            <div>
                <form>
                    <input
                        type={'text'}
                        placeholder={'type here to search...'}
                        onChange={(event) => {handleChange(event)}}
                    />
                    <button type='button' onClick={handleSubmit}>Search</button>
                </form>
            </div>
            <div>
                {stories?.map((story) => (
                    <p key={story.objectID}>{story.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Search