import React, { useState } from 'react'
import useFetch from 'react-fetch-hook'
import Box from '@mui/material/Box'
import { Card, CardContent } from '@mui/material/'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import { FormGroup, Input } from '@mui/material/';
import TextField from '@mui/material/TextField'

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
    }

    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'                
            }}>
                <Paper component="span" 
                sx={{ 
                    display: 'block', 
                    m: '10px',
                    p: '25px',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '500px'
                }}>

                <FormGroup 
                    sx={{
                        flexWrap: 'wrap',
                        m: '5px',
                        p: '15px',
                    }}>
                    <TextField
                        type={'text'}
                        placeholder={'type here to search...'}
                        onChange={(event) => {handleChange(event)}}
                    />
                    <Button type='button' onClick={handleSubmit}>Search</Button>
                    <Button type='button' href='/history'>View Search History</Button>
                </FormGroup>

            </Paper>
            </Box>
            <Box sx={{
                display: 'block'
                }}>
                {stories.map((story) => (
                    <Paper key={story.objectID} component="span" sx={{ display: 'block', mx: '2px' }}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" >
                                    {story.title}
                                </Typography>
                                <Typography variant="body2">
                                    {story.story_text}
                                </Typography>
                                <Button href={story.url}>
                                    Click to View Story
                                </Button>
                            </CardContent>
                        </Card>
                    </Paper>
                ))}

            </Box>
        </div>
    )
}

export default Search