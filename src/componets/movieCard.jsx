import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/movieContext"
import { FaHeart } from "react-icons/fa6";

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites}= useMovieContext()
    const favorite= isFavorite(movie.id)
    function    onFavoriteClick(e){
       e.preventDefault()
       if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavoriteClick}>
                    <FaHeart />
                </button>
            </div>
        </div>
        <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]|| "unknown"}</p>
        </div>
    </div>
}
export default MovieCard