import "../css/Favorites.css"
import { useMovieContext } from "../contexts/movieContext"
import MovieCard from "../componets/movieCard"

function Favorites(){
    const{favorites}= useMovieContext(); 
        if (Favorites){
        return (
             <div className="favorites">
                <div className="movies-grid">
                    {favorites.map((movie) => 
                     (<MovieCard movie= {movie} key={movie.id}/>))}
                </div>
             </div>
        );
    } else{
        return (
    <div className="favorites-empty">
        <h2 className="">No favorite movies yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
    ) 
    }


   
}
export default Favorites