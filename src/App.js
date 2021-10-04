import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Search, History } from './pages'
function App() {

  return (
    <div>
      <Router>
        <Switch>
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
