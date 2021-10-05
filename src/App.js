import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './pages/Search'
import History from './pages/History'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

function App() {

  return (
    <div>
      <Container sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Typography>
          <h1> Hacker News Search App</h1>
        </Typography>
      </Container>
      
      <Router>
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
