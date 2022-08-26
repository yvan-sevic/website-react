import {MovieState} from '../movieState'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { useState } from 'react'


const MovieDetails = () => {
    const history = useHistory()
    const url = history.location.pathname
    const [movies, setMovieState] = useState(MovieState)
    return (
        <div>
            <h1>Movie Details</h1>
        </div>
    )
}

export default MovieDetails