import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './pages/Search'
import History from './pages/History'
function App() {

  return (
    <div>
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
