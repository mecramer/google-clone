import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Search({ hideButtons = false }) {
	// gives us the state data layer and a dispatch to shoot actions into the data layer
	const [{}, dispatch] = useStateValue('') // term is destructured from state

	const [input, setInput] = useState('')
	const history = useHistory() // this is a hook that provides us with the browsers history

	const search = (event) => {
		event.preventDefault()
		console.log('you hit search >> ', input)

		// this puts the search term into the data layer to be received from the search results page
		// so when search function executes, the term gets updated with current value
		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input,
		})

		// route user to the search results page
		history.push('/search')
	}

	return (
		<form className='search'>
			<div className='search__input'>
				<SearchIcon className='search__inputIcon' />
				<input value={input} onChange={(event) => setInput(event.target.value)} />
				<MicIcon />
			</div>

			{/* if hideButtons prop is not set to false, show the buttons, if it is false, render, but hide the buttons */}
			{/* This controls whether we want the Search and I'm Feeling Lucky buttons to show on a page */}
			{!hideButtons ? (
				<div className='search__buttons'>
					<Button type='submit' variant='outlined' onClick={search}>
						Google Search
					</Button>
					<Button variant='outlined'>I'm Feeling Lucky</Button>
				</div>
			) : (
				<div className='search__buttons'>
					<Button className='search__buttonsHidden' type='submit' variant='outlined' onClick={search}>
						Google Search
					</Button>
					<Button className='search__buttonsHidden' variant='outlined'>
						I'm Feeling Lucky
					</Button>
				</div>
			)}
		</form>
	)
}

export default Search
