// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDgwNTFjY2ZkYjc0N2QzYjA1ZTVhMGNjYzdhNGMwNCIsIm5iZiI6MTc0MzA2OTQ4Ni40MzIsInN1YiI6IjY3ZTUyMTJlNWU4ZTVjOWJhY2JhM2I3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FojO0DP7gEvEeisvrlPmcltF6CbnwDLzsKnRokbSCvQ'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));


export const TMDB_CONFIG = {
    BASE_URL : "https://api.themoviedb.org/3",
    API_KEY:process.env.EXPO_PUBLIC_,
    headers: {
            accept: 'application/json',
            Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API}`
    }
}


export const fetchMovies = async({ query }:{query:string}) => {
    const endpoint = query
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if(!response.ok){
        //@ts-ignore
        throw new Error("failed to fetch movies",response.statusText)
    }
    const data = await response.json();
    return data.results
}