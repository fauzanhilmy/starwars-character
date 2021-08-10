// import useFetch from "../hooks/useFetch";
import React from 'react'
export const GET_CHARACTERS = "movies/getMovies"
export const GET_DETAILS = "details/getDetails"
export const GET_FAVORITES = "favorites/addMovies"
export const GET_SEARCH = "movies/search"
export const GET_PAGE = "movies/pages"


export function ShowCharacters() {
    // const [loading, error, setLoading, setError] = useFetch();
    return function(dispatch) {


        fetch(`https://swapi.dev/api/people`)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result.results);

                dispatch({
                    type: GET_CHARACTERS,
                    payload: result.results
                })
            })
            .catch((err) => {
                // setError(err)
                console.log(err)
            })
            .finally((_) => {
                // setLoading(false)
            })

    }
}

export function showDetails(id) {
    return function(dispatch) {

        fetch(
                `https://swapi.dev/api/people/${id}`
            )
            .then((response) => response.json())
            .then((result) => {

                dispatch({
                    type: GET_DETAILS,
                    payload: result
                });
            })
            .catch((err) => {
                //   setError(err);
                console.log(err)
            })
            .finally((_) => {
                //   setLoading(false);
            });
    }
}

export function addToFavorites(payload) {
    return {
        type: GET_FAVORITES,
        payload
    }
}

export function searchCharacters(payload) {
    return {
        type: GET_SEARCH,
        payload
    }
}