// src/pages/FavoriteMovies.js

import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoriteMoviesPages = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
   <>
    <h1 className=" flex justify-center pl-10 mt-10  font-bold tracking-tightn text-black sm:text-3xl">
        <span className=" border-b-4  flex justify-center ">Favorite Movies</span>
      </h1>
    <div  className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">

    {favorites.map((movie, index) => (
      <div key={index} className="  aspect-w-2 aspect-h-3">
        <MovieCard index={index} movie={movie} />
      </div>
    ))}
    </div>
   
   </>
  );
};

export default FavoriteMoviesPages;
