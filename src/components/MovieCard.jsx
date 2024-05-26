
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/moviesSlice';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line react/prop-types
const MovieCard = ({ index, movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(movie));
  };

  return (
    <div key={index} className="p-6 rounded-md border cursor-pointer flex flex-col justify-between" onClick={() => window.open(movie.imdb_url, '_blank')}>
    <img src={movie.image} alt={movie.movie} className="aspect-w-16 aspect-h-9 w-full rounded-md md:aspect-auto md:h-80 lg:h-40" />
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-lg font-semibold">{movie.movie}</h1>
      <div className="flex items-center space-x-2 text-gray-700">
        <span>Rating: {movie.rating}</span>
      </div>
      <button onClick={handleFavoriteToggle} className="inline-flex overflow-hidden text-white bg-gray-900 rounded group mt-4">
        <span className="px-3.5 py-3 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
          <FontAwesomeIcon icon={faHeart} className={`${isFavorite ? 'text-red-400' : 'text-white'} h-5 mr-1`} />
        </span>
        <span className="pl-4 pr-5 py-2.5">{isFavorite ? 'Unfavorite' : 'Favorite'}</span>
      </button>
    </div>
  </div>
  
  );
};

export default MovieCard;
