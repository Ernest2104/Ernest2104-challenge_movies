const API_KEY = process.env.REACT_APP_API_KEY

export const fetchMovies = () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`)
    .then(moviesApi => moviesApi.json())
    .then(data => data.results)
}

// export const fetchMovies = async () => {
//     const api = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`);
//     const moviesApi = await api.json();
//     return moviesApi.results
// }
