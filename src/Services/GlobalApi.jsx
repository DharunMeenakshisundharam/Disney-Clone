import  axios  from "axios";
const movieurl = "https://api.themoviedb.org/3"
const apikey = "f468f70f284faaf07807df9bb4bde424"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=f468f70f284faaf07807df9bb4bde424';
//https://api.themoviedb.org/3/trending/movie/day?api_key=f468f70f284faaf07807df9bb4bde424
const getTreadingvideos = axios.get(movieurl+"/trending/movie/day?api_key="+apikey);
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTreadingvideos,
    getMovieByGenreId
}