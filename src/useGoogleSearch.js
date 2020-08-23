import React, { useState, useEffect } from 'react'
import API_KEY from './keys'

// Search engine ID, created at https://cse.google.com/cse/create/new
const CONTEXT_KEY = '00f773d3e9658eeb5'

// creating our own custom hook
const useGoogleSearch = (term) => {
    // custom hook
    const [ data, setData ] = useState(null)

    // whenever we use this hook its going to fire off a useEffect whenever term changes
    // the url is googles endpoint that connects to their API
    // then get the JSON from the response
    useEffect(
        () => {
            const fetchData = async () => {
                fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                    .then((response) => response.json())
                    .then((result) => {
                        setData(result)
                    })
            }
            fetchData()
        },
        [ term ],
    )

    // we return a object from the hook
    return { data }
}

export default useGoogleSearch
