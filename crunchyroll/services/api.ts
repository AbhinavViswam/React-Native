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


interface MovieDetails {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
    } | null;
    budget: number;
    genres: {
      id: number;
      name: string;
    }[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }[];
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
    }[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }


export const fetchMovieDetails = async (movieId:string):Promise<MovieDetails> => {
    try{
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,{
            method:"GET",
            headers:TMDB_CONFIG.headers
        })

        if(!response.ok){
            throw new Error("failed to fetch movie details")
        }
        const data = await response.json();
        return data
    }catch(error){
        console.log('error')
        throw error;
        
    }
}