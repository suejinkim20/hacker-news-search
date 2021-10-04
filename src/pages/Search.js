import React, { useState } from 'react'
import useFetch from 'react-fetch-hook'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Search = () => {
    const url = 'http://hn.algolia.com/api/v1/search_by_date?query='
    const [search, setSearch] = useState(null)
    const [query, setQuery] = useState(null)
    const { isLoading, data, error } = useFetch(url + search + '&tags=story') 
    let stories = []
    let history = JSON.parse(localStorage.getItem('stories')) || []

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
        
        if (history.indexOf(query) == -1){
            history.push(query)
            localStorage.setItem('stories', JSON.stringify(history))
        }
        setQuery(null)

    }
   
    
    if (search) {
        stories = data.hits || []
        console.log(stories)
    }

    return (
        <div>
            <h1> Hacker News Search App</h1>
            <Box component="span" sx={{ display: 'inline-block', mx: '2px' }}>
                <form>
                    <input
                        type={'text'}
                        placeholder={'type here to search...'}
                        onChange={(event) => {handleChange(event)}}
                    />
                    <button type='button' onClick={handleSubmit}>Search</button>
                </form>
            </Box>
            <div>
                {stories.map((story) => (
                    <Box key={story.objectID} component="span" sx={{ display: 'inline-block', mx: '2px' }}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" >
                                    {story.title}
                                </Typography>
                                <p>
                                    {story.story_text}
                                </p>
                                <Button href={story.url}>
                                    Click to View Story
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                ))}

            </div>
        </div>
    )
}

export default Search