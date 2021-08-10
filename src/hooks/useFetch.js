import {
    useState,
    useEffect
} from 'react'
import {
    useDispatch
} from 'react-redux'
import {
    ShowCharacters
} from '../store/action'

export default function useFetch() {
    const dispatch = useDispatch()
        // const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3c56e9de7ea8bb369987a2bed864300d&language=en-US&page=1")
            .then((response) => response.json())
            .then((result) => {
                // console.log(result.results);
                // setData(result.results)
                // dispatch({
                //     type: "characters/getCharacters",
                //     payload: result.results
                // })
                dispatch(ShowCharacters(result.results))
            })
            .catch((err) => {
                setError(err)
            })
            .finally((_) => {
                setLoading(false)
            })
    }, [dispatch])

    return [loading, error, setLoading, setError]
}