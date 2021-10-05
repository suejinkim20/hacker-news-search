import React from 'react'
import { Container, Box, Paper } from '@mui/material'
import { List, ListItem } from '@mui/material'
import Button from '@mui/material/Button'

const History = () => {
    const clearHistory = () => {
        let history = []
        localStorage.setItem("stories", JSON.stringify(history))
        window.location.reload()
    }
    const storedQueries = JSON.parse(localStorage.getItem('stories'))

    return (
        <div>
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <Paper sx={{
                width: '500px',
                p: '20px',
                m: '10px'
            }} elevation={3}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <h2>Search History</h2>
                </Box>
                <Box>
                    <List>
                        {storedQueries.map((query, index) => (
                        <ListItem key={index}> {query} </ListItem>
                        ))}
                    </List>
                </Box>
            <Button onClick={clearHistory} variant='outlined' sx={{mx:'7px'}}>Clear History</Button>
            <Button href='/search' variant='outlined' sx={{mx:'7px'}}>Return to Search</Button>
            </Paper>
        </Container>

        </div>
    )
}

export default History