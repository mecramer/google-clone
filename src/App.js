import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
    return (
        <div className='app'>
            {/* use Router to render components based on path parameter  */}
            <Router>
                <Switch>
                    <Route path='/search'>
                        {/* Search Page (the results of the search) */}
                        <SearchPage />
                    </Route>
                    <Route path='/'>
                        {/* Home (the one with search) */}
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
